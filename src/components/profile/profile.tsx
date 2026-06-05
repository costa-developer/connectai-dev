'use client'

import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { Loader } from '@/components/loader'
import { Pencil, UserCircle2, Mail, ImageIcon } from 'lucide-react'
import InfoBar from '@/components/infobar'

const Profile: React.FC = () => {
  const { user, isLoaded } = useUser()
  const { toast } = useToast()
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [uploading, setUploading] = useState(false)

  React.useEffect(() => {
    if (user) {
      setFirstName(user.firstName ?? '')
      setLastName(user.lastName ?? '')
    }
  }, [user])

  if (!isLoaded || !user) return null

  const onSave = async () => {
    try {
      setSaving(true)
      await user.update({ firstName, lastName })
      toast({ title: 'Profile updated', description: 'Your name has been saved.' })
      setEditing(false)
    } catch (e: any) {
      toast({ title: 'Could not save', description: e?.message ?? 'Try again.' })
    } finally {
      setSaving(false)
    }
  }

  const onAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      setUploading(true)
      await user.setProfileImage({ file })
      toast({ title: 'Photo updated' })
    } catch (err: any) {
      toast({ title: 'Upload failed', description: err?.message ?? 'Try again.' })
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <InfoBar />
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
        {/* Cover */}
        <div className="relative h-44 overflow-hidden rounded-2xl border border-border">
          <div className="absolute inset-0 midnight-glow" />
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <Card className="-mt-20 mx-3 rounded-2xl border border-border bg-card/80 p-6 backdrop-blur">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex items-end gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-2 ring-primary/40">
                {user.imageUrl ? (
                  <Image src={user.imageUrl} alt={user.fullName ?? 'profile'} fill className="object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <UserCircle2 className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}
                <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-background/60 opacity-0 transition hover:opacity-100">
                  <Loader loading={uploading}>
                    <ImageIcon className="h-5 w-5 text-foreground" />
                  </Loader>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onAvatar}
                  />
                </label>
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold">
                  {user.fullName || 'Your profile'}
                </h1>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {user.primaryEmailAddress?.emailAddress}
                </div>
              </div>
            </div>
            {!editing && (
              <Button onClick={() => setEditing(true)} variant="outline" className="gap-2 border-border">
                <Pencil className="h-4 w-4" />
                Edit profile
              </Button>
            )}
          </div>
        </Card>

        {editing && (
          <Card className="mx-3 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <h2 className="font-display text-lg font-semibold">Personal information</h2>
            <p className="mb-5 text-sm text-muted-foreground">
              Update how your name appears across Connect AI.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Email</Label>
                <Input value={user.primaryEmailAddress?.emailAddress ?? ''} disabled />
                <p className="text-xs text-muted-foreground">
                  Change your email from your account security settings.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setEditing(false)}>
                Cancel
              </Button>
              <Button onClick={onSave} disabled={saving}>
                <Loader loading={saving}>Save changes</Loader>
              </Button>
            </div>
          </Card>
        )}

        <Card className="mx-3 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <h2 className="font-display text-lg font-semibold">Account</h2>
          <p className="mb-5 text-sm text-muted-foreground">
            Your plan, billing, and security live in settings.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="border-border">
              <a href="/settings">Manage plan & billing</a>
            </Button>
            <Button asChild variant="outline" className="border-border">
              <a href="/settings">Domains</a>
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Profile

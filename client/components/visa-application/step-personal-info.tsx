"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PersonalInfoData {
    fullName: string
    email: string
    phone: string
    dateOfBirth: string
    nationality: string
    passportNumber: string
}

interface StepPersonalInfoProps {
    data: PersonalInfoData
    onChange: (data: Partial<PersonalInfoData>) => void
}

export function StepPersonalInfo({ data, onChange }: StepPersonalInfoProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Personal Information</h3>
                <p className="text-muted-foreground">Let's start with your basic details</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name (as on passport)</Label>
                    <Input
                        id="fullName"
                        value={data.fullName}
                        onChange={(e) => onChange({ fullName: e.target.value })}
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => onChange({ email: e.target.value })}
                        placeholder="john.doe@example.com"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        type="tel"
                        value={data.phone}
                        onChange={(e) => onChange({ phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                        id="dateOfBirth"
                        type="date"
                        value={data.dateOfBirth}
                        onChange={(e) => onChange({ dateOfBirth: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <Select value={data.nationality} onValueChange={(value) => onChange({ nationality: value })}>
                        <SelectTrigger id="nationality">
                            <SelectValue placeholder="Select nationality" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="china">China</SelectItem>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="pakistan">Pakistan</SelectItem>
                            <SelectItem value="bangladesh">Bangladesh</SelectItem>
                            <SelectItem value="vietnam">Vietnam</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="passportNumber">Passport Number</Label>
                    <Input
                        id="passportNumber"
                        value={data.passportNumber}
                        onChange={(e) => onChange({ passportNumber: e.target.value })}
                        placeholder="A12345678"
                        required
                    />
                </div>
            </div>
        </div>
    )
}

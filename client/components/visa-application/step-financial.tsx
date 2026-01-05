"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

interface FinancialData {
    fundingSource: string
    availableFunds: string
    currency: string
    sponsorName: string
    sponsorRelationship: string
    employmentStatus: string
    additionalFinancialInfo: string
}

interface StepFinancialProps {
    data: FinancialData
    onChange: (data: Partial<FinancialData>) => void
}

export function StepFinancial({ data, onChange }: StepFinancialProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Financial Information</h3>
                <p className="text-muted-foreground">Help us understand your financial situation</p>
            </div>

            <div className="space-y-2">
                <Label>Primary Source of Funding</Label>
                <RadioGroup value={data.fundingSource} onValueChange={(value) => onChange({ fundingSource: value })}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="self" id="funding-self" />
                        <Label htmlFor="funding-self" className="font-normal cursor-pointer">
                            Self-funded
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="parents" id="funding-parents" />
                        <Label htmlFor="funding-parents" className="font-normal cursor-pointer">
                            Parents/Family
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="scholarship" id="funding-scholarship" />
                        <Label htmlFor="funding-scholarship" className="font-normal cursor-pointer">
                            Scholarship/Fellowship
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="loan" id="funding-loan" />
                        <Label htmlFor="funding-loan" className="font-normal cursor-pointer">
                            Education Loan
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mixed" id="funding-mixed" />
                        <Label htmlFor="funding-mixed" className="font-normal cursor-pointer">
                            Combination of sources
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="availableFunds">Available Funds (Amount)</Label>
                    <Input
                        id="availableFunds"
                        value={data.availableFunds}
                        onChange={(e) => onChange({ availableFunds: e.target.value })}
                        placeholder="50000"
                        type="number"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={data.currency} onValueChange={(value) => onChange({ currency: value })}>
                        <SelectTrigger id="currency">
                            <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="usd">USD</SelectItem>
                            <SelectItem value="eur">EUR</SelectItem>
                            <SelectItem value="gbp">GBP</SelectItem>
                            <SelectItem value="inr">INR</SelectItem>
                            <SelectItem value="cny">CNY</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {(data.fundingSource === "parents" || data.fundingSource === "mixed") && (
                <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Sponsor Information</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="sponsorName">Sponsor Name</Label>
                            <Input
                                id="sponsorName"
                                value={data.sponsorName}
                                onChange={(e) => onChange({ sponsorName: e.target.value })}
                                placeholder="Full name of sponsor"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="sponsorRelationship">Relationship to Sponsor</Label>
                            <Select
                                value={data.sponsorRelationship}
                                onValueChange={(value) => onChange({ sponsorRelationship: value })}
                            >
                                <SelectTrigger id="sponsorRelationship">
                                    <SelectValue placeholder="Select relationship" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="parent">Parent</SelectItem>
                                    <SelectItem value="sibling">Sibling</SelectItem>
                                    <SelectItem value="spouse">Spouse</SelectItem>
                                    <SelectItem value="relative">Other Relative</SelectItem>
                                    <SelectItem value="guardian">Guardian</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-2">
                <Label htmlFor="employmentStatus">Current Employment Status</Label>
                <Select value={data.employmentStatus} onValueChange={(value) => onChange({ employmentStatus: value })}>
                    <SelectTrigger id="employmentStatus">
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="student">Full-time Student</SelectItem>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-employed</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="gap-year">Taking a Gap Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="additionalFinancialInfo">Additional Financial Details</Label>
                <Textarea
                    id="additionalFinancialInfo"
                    value={data.additionalFinancialInfo}
                    onChange={(e) => onChange({ additionalFinancialInfo: e.target.value })}
                    placeholder="Any additional information about your financial situation, assets, or funding arrangements"
                    rows={4}
                />
            </div>
        </div>
    )
}

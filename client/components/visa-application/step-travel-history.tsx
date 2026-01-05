"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

interface TravelHistoryData {
    hasPreviousVisa: string
    previousVisaDetails: string
    hasVisaRejection: string
    rejectionDetails: string
    travelHistory: string
}

interface StepTravelHistoryProps {
    data: TravelHistoryData
    onChange: (data: Partial<TravelHistoryData>) => void
}

export function StepTravelHistory({ data, onChange }: StepTravelHistoryProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Travel & Visa History</h3>
                <p className="text-muted-foreground">Share your previous travel and visa experience</p>
            </div>

            <div className="space-y-2">
                <Label>Have you previously held any visa?</Label>
                <RadioGroup value={data.hasPreviousVisa} onValueChange={(value) => onChange({ hasPreviousVisa: value })}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="visa-yes" />
                        <Label htmlFor="visa-yes" className="font-normal cursor-pointer">
                            Yes
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="visa-no" />
                        <Label htmlFor="visa-no" className="font-normal cursor-pointer">
                            No
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            {data.hasPreviousVisa === "yes" && (
                <div className="space-y-2">
                    <Label htmlFor="previousVisaDetails">Previous Visa Details</Label>
                    <Textarea
                        id="previousVisaDetails"
                        value={data.previousVisaDetails}
                        onChange={(e) => onChange({ previousVisaDetails: e.target.value })}
                        placeholder="Please list countries, visa types, and approximate dates (e.g., USA Student Visa 2020-2024, UK Tourist Visa 2019)"
                        rows={4}
                    />
                </div>
            )}

            <div className="border-t border-border pt-6 space-y-2">
                <Label>Have you ever had a visa application rejected?</Label>
                <RadioGroup value={data.hasVisaRejection} onValueChange={(value) => onChange({ hasVisaRejection: value })}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="rejection-yes" />
                        <Label htmlFor="rejection-yes" className="font-normal cursor-pointer">
                            Yes
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="rejection-no" />
                        <Label htmlFor="rejection-no" className="font-normal cursor-pointer">
                            No
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            {data.hasVisaRejection === "yes" && (
                <div className="space-y-2">
                    <Label htmlFor="rejectionDetails">Rejection Details</Label>
                    <Textarea
                        id="rejectionDetails"
                        value={data.rejectionDetails}
                        onChange={(e) => onChange({ rejectionDetails: e.target.value })}
                        placeholder="Please explain which country, when, and the reason (if known)"
                        rows={4}
                    />
                    <p className="text-sm text-muted-foreground">
                        Being honest about rejections helps us provide better guidance
                    </p>
                </div>
            )}

            <div className="border-t border-border pt-6 space-y-2">
                <Label htmlFor="travelHistory">International Travel History</Label>
                <Textarea
                    id="travelHistory"
                    value={data.travelHistory}
                    onChange={(e) => onChange({ travelHistory: e.target.value })}
                    placeholder="List countries you've visited in the past 10 years (approximate dates are fine)"
                    rows={5}
                />
                <p className="text-sm text-muted-foreground">This helps establish your travel credibility</p>
            </div>
        </div>
    )
}

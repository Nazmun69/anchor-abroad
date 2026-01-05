"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface EducationData {
    currentEducationLevel: string
    intendedDegree: string
    fieldOfStudy: string
    targetUniversity: string
    programStartDate: string
    gpa: string
    additionalInfo: string
}

interface StepEducationProps {
    data: EducationData
    onChange: (data: Partial<EducationData>) => void
}

export function StepEducation({ data, onChange }: StepEducationProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Educational Background</h3>
                <p className="text-muted-foreground">Tell us about your academic journey</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="currentEducationLevel">Current Education Level</Label>
                    <Select
                        value={data.currentEducationLevel}
                        onValueChange={(value) => onChange({ currentEducationLevel: value })}
                    >
                        <SelectTrigger id="currentEducationLevel">
                            <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                            <SelectItem value="masters">Master's Degree</SelectItem>
                            <SelectItem value="doctorate">Doctorate</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="intendedDegree">Intended Degree Program</Label>
                    <Select value={data.intendedDegree} onValueChange={(value) => onChange({ intendedDegree: value })}>
                        <SelectTrigger id="intendedDegree">
                            <SelectValue placeholder="Select degree" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="associate">Associate Degree</SelectItem>
                            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                            <SelectItem value="masters">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD/Doctorate</SelectItem>
                            <SelectItem value="certificate">Certificate Program</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fieldOfStudy">Field of Study</Label>
                    <Input
                        id="fieldOfStudy"
                        value={data.fieldOfStudy}
                        onChange={(e) => onChange({ fieldOfStudy: e.target.value })}
                        placeholder="e.g., Computer Science, Business"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="targetUniversity">Target University/Institution</Label>
                    <Input
                        id="targetUniversity"
                        value={data.targetUniversity}
                        onChange={(e) => onChange({ targetUniversity: e.target.value })}
                        placeholder="e.g., Harvard University"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="programStartDate">Intended Program Start Date</Label>
                    <Input
                        id="programStartDate"
                        type="date"
                        value={data.programStartDate}
                        onChange={(e) => onChange({ programStartDate: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="gpa">Current GPA (if applicable)</Label>
                    <Input
                        id="gpa"
                        value={data.gpa}
                        onChange={(e) => onChange({ gpa: e.target.value })}
                        placeholder="e.g., 3.5/4.0"
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="additionalInfo">Additional Academic Information</Label>
                    <Textarea
                        id="additionalInfo"
                        value={data.additionalInfo}
                        onChange={(e) => onChange({ additionalInfo: e.target.value })}
                        placeholder="Mention any relevant achievements, honors, or special circumstances"
                        rows={4}
                    />
                </div>
            </div>
        </div>
    )
}

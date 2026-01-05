"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface TestScoresData {
    englishTest: string
    englishScore: string
    englishTestDate: string
    greGmat: string
    greGmatScore: string
    greGmatTestDate: string
    hasTestScores: string
}

interface StepTestScoresProps {
    data: TestScoresData
    onChange: (data: Partial<TestScoresData>) => void
}

export function StepTestScores({ data, onChange }: StepTestScoresProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Test Scores</h3>
                <p className="text-muted-foreground">Share your language proficiency and standardized test scores</p>
            </div>

            <div className="space-y-2">
                <Label>Have you taken any standardized tests?</Label>
                <RadioGroup value={data.hasTestScores} onValueChange={(value) => onChange({ hasTestScores: value })}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="test-yes" />
                        <Label htmlFor="test-yes" className="font-normal cursor-pointer">
                            Yes, I have test scores
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="test-no" />
                        <Label htmlFor="test-no" className="font-normal cursor-pointer">
                            No, I plan to take them soon
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            {data.hasTestScores === "yes" && (
                <>
                    <div className="border-t border-border pt-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4">English Proficiency Test</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="englishTest">Test Type</Label>
                                <Select value={data.englishTest} onValueChange={(value) => onChange({ englishTest: value })}>
                                    <SelectTrigger id="englishTest">
                                        <SelectValue placeholder="Select test" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ielts">IELTS</SelectItem>
                                        <SelectItem value="toefl">TOEFL</SelectItem>
                                        <SelectItem value="pte">PTE</SelectItem>
                                        <SelectItem value="duolingo">Duolingo</SelectItem>
                                        <SelectItem value="none">Not taken yet</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="englishScore">Overall Score</Label>
                                <Input
                                    id="englishScore"
                                    value={data.englishScore}
                                    onChange={(e) => onChange({ englishScore: e.target.value })}
                                    placeholder="e.g., 7.0 (IELTS)"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="englishTestDate">Test Date</Label>
                                <Input
                                    id="englishTestDate"
                                    type="date"
                                    value={data.englishTestDate}
                                    onChange={(e) => onChange({ englishTestDate: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-border pt-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Graduate Entrance Exam (if applicable)</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="greGmat">Test Type</Label>
                                <Select value={data.greGmat} onValueChange={(value) => onChange({ greGmat: value })}>
                                    <SelectTrigger id="greGmat">
                                        <SelectValue placeholder="Select test" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="gre">GRE</SelectItem>
                                        <SelectItem value="gmat">GMAT</SelectItem>
                                        <SelectItem value="sat">SAT</SelectItem>
                                        <SelectItem value="act">ACT</SelectItem>
                                        <SelectItem value="none">Not required/taken</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="greGmatScore">Overall Score</Label>
                                <Input
                                    id="greGmatScore"
                                    value={data.greGmatScore}
                                    onChange={(e) => onChange({ greGmatScore: e.target.value })}
                                    placeholder="e.g., 320 (GRE)"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="greGmatTestDate">Test Date</Label>
                                <Input
                                    id="greGmatTestDate"
                                    type="date"
                                    value={data.greGmatTestDate}
                                    onChange={(e) => onChange({ greGmatTestDate: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

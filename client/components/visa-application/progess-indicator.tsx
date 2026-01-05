"use client"

interface ProgressIndicatorProps {
    currentStep: number
    totalSteps: number
    steps: string[]
}

export function ProgressIndicator({ currentStep, totalSteps, steps }: ProgressIndicatorProps) {
    return (
        <div className="w-full mb-8">
            {/* Progress Bar */}
            <div className="relative mb-8">
                <div className="overflow-hidden h-2 flex rounded-full bg-muted">
                    <div
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        className="transition-all duration-500 ease-out bg-accent"
                    />
                </div>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between">
                {steps.map((step, index) => {
                    const stepNumber = index + 1
                    const isCompleted = stepNumber < currentStep
                    const isCurrent = stepNumber === currentStep

                    return (
                        <div key={index} className="flex flex-col items-center flex-1">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${isCompleted
                                        ? "bg-accent text-accent-foreground"
                                        : isCurrent
                                            ? "bg-accent text-accent-foreground ring-4 ring-accent/20"
                                            : "bg-muted text-muted-foreground"
                                    }`}
                            >
                                {isCompleted ? "✓" : stepNumber}
                            </div>
                            <p
                                className={`text-xs mt-2 text-center transition-colors duration-300 ${isCurrent ? "text-foreground font-semibold" : "text-muted-foreground"
                                    }`}
                            >
                                {step}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

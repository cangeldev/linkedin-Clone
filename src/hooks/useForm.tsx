import { useState, useCallback } from 'react'

export const useForm = (initialValues: Record<string, string>) => {
    const [formData, setFormData] = useState(initialValues)

    const handleInputChange = useCallback((field: string, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }))
    }, [])

    return [formData, handleInputChange] as const
}

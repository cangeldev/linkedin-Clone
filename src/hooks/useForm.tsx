import { useState, useCallback } from 'react'

/**
 * useForm - Bir formun durumunu yönetmek için kullanılan custom hook.
 * @param initialValues - Formun başlangıç değerlerini içeren nesnedir.
 * @returns [formData, handleInputChange] - Form verilerini ve giriş değişikliklerini işleyen işlevi içerir.
 */
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

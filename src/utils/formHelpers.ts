import { FormErrorInterface, WelcomeFormInterface } from './../components/InscriptionForm';

export const validateForm = (formData: WelcomeFormInterface) => {
    const newErrors: FormErrorInterface = {};

    if (!formData.name) {
        newErrors.name = 'Name is required';
    }

    if (!formData.projectName) {
        newErrors.projectName = 'Project Name is required';
    }

    return newErrors;
};
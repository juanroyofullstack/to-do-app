import {
	FormErrorInterface,
	WelcomeFormInterface,
} from './../components/InscriptionForm';

export const validateForm = ({
	name,
	projectName,
}: WelcomeFormInterface): FormErrorInterface => {
	const newErrors: FormErrorInterface = {};

	if (!name) {
		newErrors.name = 'Name is required';
	}

	if (!projectName) {
		newErrors.projectName = 'Project Name is required';
	}

	return newErrors;
};

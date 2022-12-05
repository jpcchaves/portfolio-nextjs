import * as Yup from 'yup'

import './yupTranslations'

export const contactValidation = Yup.object().shape({
    name: Yup.string().required().min(3).max(12),
    phone: Yup.string().max(11).required("O telefone deve seguir o seguinte formato (xx) x.xxxx-xxxx (digite apenas números)"),
    email: Yup.string().email().required(),
    subject: Yup.string().min(3).max(15).required(),
    message: Yup.string().min(3).max(700).required()
})
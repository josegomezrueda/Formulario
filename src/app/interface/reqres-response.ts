export interface Persona {
    id:       number;
    user:             string;
    password:         string;
    surname:          string;
    company_email:    string;
    personal_email:   string;
    city:             string;
    active:           boolean;
    created_date:     Date;
    imagen_url:       string;
    termination_date: Date
}

export function ReqResResponse_BLANK(): Persona {
    const aux = {
    id:       null,
    user:             null,
    password:         null,
    surname:          null,
    company_email:    null,
    personal_email:   null,
    city:             null,
    active:           null,
    created_date:     null,
    imagen_url:       null,
    termination_date: null
    };
    return Object.assign(aux);
}

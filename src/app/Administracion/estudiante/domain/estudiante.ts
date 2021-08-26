export interface Estudiante {
    id_persona: number;
    num_hour_week: number;
    coments: string;
    branch: string;
    id: string
}

export function Estudiante_BLANK(): Estudiante {
    const aux = {
        id_persona: null,
        num_hour_week: null,
        coments: null,
        branch: null,
        id: null
    };
    return Object.assign(aux);
}

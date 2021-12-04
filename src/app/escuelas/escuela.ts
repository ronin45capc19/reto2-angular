import { Facultad } from "../facultades/facultad";

export class Escuela {
    id: number | undefined;
    nombre : string | undefined;
    CantAlumnos: number | undefined;
    Recurso_fiscal: number | undefined;
    Licenciada: boolean | undefined;
    Clasificacion: number | undefined;
    fechaRegistro: Date | undefined;
    facultad: Facultad | undefined;

    /*
    private Long id;
	private String nombre;
	private Integer CantAlumnos;
	private Double Recurso_Fiscal;
	private Boolean Licenciada;
	private Integer Clasificacion;
	private Date fechaRegistro;
    */
}

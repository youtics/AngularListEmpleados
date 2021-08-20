export class Empleado{

    Legajo: number;
    Nombre: string;
    Apellido: string;
    Salario: number;
    Sexo: string;

    constructor(Legajo: number, Nombre:string, Apellido: string, Salario: number, Sexo: string)
    {
        this.Apellido=Apellido;
        this.Nombre = Nombre;
        this.Legajo = Legajo;
        this.Salario = Salario;
        this.Sexo = Sexo;
    }
}
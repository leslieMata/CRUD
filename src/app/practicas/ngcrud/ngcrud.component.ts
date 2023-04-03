import { Component } from '@angular/core';

@Component({
  selector: 'app-ngcrud',
  templateUrl: './ngcrud.component.html',
  styleUrls: ['./ngcrud.component.scss']
})
export class NgcrudComponent {
    public inventario : any =[
        {id:1, nombre : 'ropa1', precio :100},
        {id:2, nombre : 'ropa2', precio :200}
    ]
    public formulario : any ={
        id : "",
        nombre : "",
        precio : ""
    };
    public agregar() : void {
        if (this.validarVacios()) {
            if (this.buscarRepetidos()){
                let datoNuevo ={
                    id : this.formulario.id,
                    nombre : this.formulario.nombre,
                    precio : this.formulario.precio
                };
                this.inventario.push(datoNuevo);
                this.limpiar();
                alert("agregado con exito :)");  
            }
        }
    }
    public seleccionar(articulo : any) : void {
        this.formulario.id = articulo.id;
        this.formulario.nombre = articulo.nombre;
        this.formulario.precio = articulo.precio;
    }

    public eliminar(id : number) : void {
        for (let index = 0; index < this.inventario.length; index++) {
            if (this.inventario[index].id === id) {
                this.inventario.splice(index, 1)
                alert("eliminado con exito :)")
                break;
            }
        }
    }
    public actualizar() : void {
        if (this.validarVacios()) {
            if (this.idValido()) {
                let id = this.formulario.id;
                for (let index = 0; index < this.inventario.length; index++) {
                    if (this.inventario[index].id === id) {
                        this.inventario[index].id = this.formulario.id;
                        this.inventario[index].nombre = this.formulario.nombre;
                        this.inventario[index].precio = this.formulario.precio;
                        this.limpiar();
                        alert("actualizado con exito :)")
                        break;
                    }
                }
            }
        }
    }
    public  limpiar() : void {
        this.formulario.id = "";
        this.formulario.nombre = "";
        this.formulario.precio = "";
    }
    public validarVacios() : boolean {
        if (this.formulario.id =="" ||
        this.formulario.nombre ==  "" ||
        this.formulario.precio == "") {
            alert("Debes llenar los campos")
            return false;
        } else {
            return true;
        }
    }
    public buscarRepetidos(){
        let id = this.formulario.id;
        for (let index = 0; index < this.inventario.length; index++) {
           if (this.inventario[index].id == id) {
            alert("Ese id esta repetido!")
            return false
           }
        }
        return true;
    }
    public idValido() : boolean{
        let id = this.formulario.id;
        for (let index = 0; index < this.inventario.length; index++) {
           if (this.inventario[index].id == id) {
            return true;
           }
        }
        alert("ese id no es valido o no se encuentra!");
        return false;
    }
}

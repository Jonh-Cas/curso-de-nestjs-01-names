import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {

    // Array de nombres
    private _names: string[];

    constructor(){
        // Inicializamos el array
        this._names = [];
    }

    /**
     * Añado un nombre en el array
     * @param name 
     * @returns 
     */
    createName(name: string){

        // Busco el nombre en el array
        const nameFound = this._names.find(n => n.toLowerCase().trim() == name.toLowerCase().trim());

        // Sino existe lo añado
        if(!nameFound){
            this._names.push(name);
            return true;
        }else{
            return false;
        }

    }

    /**
     * Obtengo todos los nombres, pudiendo filtrar por el inicio del nombre
     * @param start 
     * @returns 
     */
    getNames(start?: string){

        // Sino existe la variable start, devolvemos todos los nombres
        if(!start){
            return this._names;
        }else{
            // Si existe la variable start, filtramos los nombres
            return this._names.filter(n => n.toLowerCase().trim().startsWith(start.toLowerCase().trim()));
        }

    }

    /**
     * Actualiza un nombre
     * @param name 
     * @param newName 
     * @returns 
     */
    updateName(name: string, newName: string){

        // Busco el indice del nombre original
        const indexNameFound = this._names.findIndex(n => n.toLowerCase().trim() == name.toLowerCase().trim());

        // Busco el indice del nombre nuevo
        const indexNewNameFound = this._names.findIndex(n => n.toLowerCase().trim() == newName.toLowerCase().trim());

        // Si el indice del nombre original es diferente a -1 (existe) y el indice del nombre nuevo es -1 (no existe)
        if(indexNameFound != -1 && indexNewNameFound == -1){
            // Actualizamos el nombre
            this._names[indexNameFound] = newName;
            return true;
        }else{
            return false;
        }

    }

    /**
     * Borramos el nombre
     * @param name 
     * @returns 
     */
    deleteName(name: string){
        // Guardo cuantos elementos tengo antes de eliminar
        const deletedBefore = this._names.length;
        // Filtro los nombres
        this._names = this._names.filter(n => n.toLowerCase().trim() != name.toLowerCase().trim());
        // Guardo cuantos elementos tengo despues de filtrar
        const deletedAfter = this._names.length;
        // Si el numero es diferente, devolvemos true
        return deletedBefore != deletedAfter;
    }
    
    clearNames(){
        this._names = [];
        return true;
    }

}

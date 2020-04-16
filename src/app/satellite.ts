// import { runInThisContext } from 'vm';

export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operation: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operation: boolean) {

        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operation = operation;

    }

    shouldShowWarning(): boolean {

        if (this.type === 'Space Debris') {
            
            return true;

        }

        else {

            return false;

        }

    }

}

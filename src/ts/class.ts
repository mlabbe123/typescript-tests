module ClassTest {
    export class Shape {
        area: number;
        private color: string;

        constructor(public name: string, width: number, height: number) {
            this.area = width * height;
            this.color = 'pink';
        }

        shoutout() {
            return 'Im a ' + this.color + ' ' + this.name + ' with an area of ' + this.area + 'cm squared.';
        }
    }

    export class Shape3D extends Shape {
        volume: number;

        constructor(public name: string, width: number, height: number, length: number) {
            super(name, width, height);
            this.volume = length * this.area;
        }

        shoutout() {
            return 'Im a ' + this.name + ' with a volume of ' + this.volume + ' cm cube.'
        }

        superShoutout() {
            return super.shoutout();
        }
    }
}
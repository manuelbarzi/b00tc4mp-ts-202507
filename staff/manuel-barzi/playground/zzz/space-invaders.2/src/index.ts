class Scene {
    private width: number;
    private height: number;
    private container: HTMLElement | null = null

    constructor(width: number, height: number) {
        this.width = width
        this.height = height

        this.container = document.createElement("div")
        this.container.style.position = "relative"
        this.container.style.width = `${width}px`
        this.container.style.height = `${height}px`
        this.container.style.border = "1px solid black"
        this.container.style.overflow = "hidden"
        this.container.style.backgroundColor = "gray"
    }

    public getWidth(): number {
        return this.width
    }

    public getHeight(): number {
        return this.height
    }

    public getContainer(): HTMLElement | null {
        return this.container
    }

    public add(object: Ship | Bullet | Alien): void {
        this.container?.appendChild(object.getContainer()!)
    }
}

class Ship {
    private x: number = 0
    private y: number = 0
    private width: number = 0
    private height: number = 0
    private container: HTMLElement | null = null

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.container = document.createElement("div")
        this.container.style.position = "absolute"
        this.container.style.width = `${width}px`
        this.container.style.height = `${height}px`
        this.container.style.left = `${x - width / 2}px`
        this.container.style.bottom = `${y - height / 2}px`
        this.container.style.backgroundImage = "url(./public/images/ship.png)"
        this.container.style.backgroundSize = "cover"
    }

    public getContainer(): HTMLElement | null {
        return this.container
    }
}

class Bullet {
    private x: number = 0
    private y: number = 0
    private width: number = 0
    private height: number = 0
    private container: HTMLElement | null = null

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.container = document.createElement("div")
        this.container.style.position = "absolute"
        this.container.style.width = `${width}px`
        this.container.style.height = `${height}px`
        this.container.style.backgroundColor = "red"
        this.container.style.left = `${x - width / 2}px`
        this.container.style.bottom = `${y - height / 2}px`
    }

    public getContainer(): HTMLElement | null {
        return this.container
    }
}

class Alien {
    private x: number = 0
    private y: number = 0
    private width: number = 0
    private height: number = 0
    private container: HTMLElement | null = null

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.container = document.createElement("div")
        this.container.style.position = "absolute"
        this.container.style.width = `${width}px`
        this.container.style.height = `${height}px`
        this.container.style.left = `${x - width / 2}px`
        this.container.style.bottom = `${y - height / 2}px`
        this.container.style.backgroundImage = "url(./public/images/invader.png)"
        this.container.style.backgroundSize = "cover"
    }

    public getContainer(): HTMLElement | null {
        return this.container
    }
}

class Game {
    private scene: Scene
    private ship: Ship
    private bullets: Bullet[]
    private aliens: Alien[]
    private container: HTMLElement | null

    constructor(containerId: string) {
        this.container = document.getElementById(containerId)

        this.scene = new Scene(800, 600)
        this.container?.appendChild(this.scene.getContainer()!)

        this.ship = new Ship(400, 50, 50, 50)
        this.scene.add(this.ship)


        this.bullets = []
        this.aliens = []

        // Initialize aliens in a grid
        const rows = 2
        const cols = 7
        const alienWidth = 50
        const alienHeight = 50
        const colSpacing = this.scene.getWidth() / (cols + 1)
        const rowSpacing = this.scene.getHeight() / 10

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * (alienWidth + colSpacing) + colSpacing
                const y = this.scene.getHeight() - (row * (alienHeight + rowSpacing)) - 100

                const alien = new Alien(x, y, alienWidth, alienHeight)
                this.aliens.push(alien)
                this.scene.add(alien)
            }
        }
    }
}

// Initialize the game
const game = new Game("game")
export class Tag {

    // static readonly Angular = new Tag('Angular', '#E04C2F');
    static readonly ANGULAR = new Tag('Angular', 'red');

    static readonly HTML = new Tag('HTML', 'blue');
    static readonly CSS = new Tag('CSS', 'green');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'darkblue');
    static readonly JQUERY = new Tag('jQuery', 'darkgreen');
    static readonly REACTNATIVE = new Tag('React Native', 'darkblue');
    static readonly VUEJS = new Tag('Vue.js', 'darkblue');
    static readonly ANGULAR_MATERIAL = new Tag('Angular Material', 'darkblue');
    static readonly IONIC = new Tag('Ionic', 'darkblue');
    static readonly REACT_NATIVE_NATIVE_COMPONENTS = new Tag('React Native Native Components', 'darkblue');
    static readonly SWIFT = new Tag('Swift', 'orange');
    static readonly KOTLIN = new Tag('Kotlin', 'blue');
    static readonly GOLANG = new Tag('GoLang', 'blue');
    static readonly RUST = new Tag('Rust', 'blue');
    static readonly Elixir = new Tag('Elixir', 'blue');
    static readonly ELM = new Tag('Elm', 'blue');
    static readonly FERRIS_BICYCLE = new Tag('Ferris Bicycle', 'darkblue');
    static readonly DOCKER = new Tag('Docker', 'blue');
    static readonly MICROSERVICE = new Tag('Microservice', 'darkblue');
    static readonly CLOUD_NATIVE = new Tag('Cloud Native', 'darkblue');
    static readonly KUBERNETES = new Tag('Kubernetes', 'darkblue');
    static readonly SERVICE_MESH = new Tag('Service Mesh', 'darkblue');
    static readonly API_GATEWAY = new Tag('API Gateway', 'darkblue');
    static readonly MONOLITHIC = new Tag('Monolithic', 'darkblue');
    static readonly SOA = new Tag('SOA', 'darkblue');
    static readonly EVENT_DRIVEN = new Tag('Event Driven', 'darkblue');
    static readonly CQRS = new Tag('CQRS', 'darkblue');
    static readonly DDD = new Tag('DDD', 'darkblue');
    static readonly HEXAGONAL = new Tag('Hexagonal', 'darkblue');
    
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly Java = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#E04C2F');
    static readonly REACT = new Tag('React', 'blue');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString(){
        return this.key;
    }
}
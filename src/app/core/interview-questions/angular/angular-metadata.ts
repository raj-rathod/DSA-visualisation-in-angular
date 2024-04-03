import { InterviewQuestion } from "src/app/shared/interfaces/interview-questions.interface";

export const angularInterviewQuestion:InterviewQuestion[] = [
  {
    question:'What is Angular Framework?',
    slug:'what-is-angular-framework',
    answer:`<h3 id="what-is-angular-framework">What is Angular Framework?</h3>
    <p>Angular is a <strong>TypeScript-based open-source</strong> front-end platform that makes it easy to build web, mobile and desktop applications. The major features of this framework include declarative templates, dependency injection, end to end tooling which ease application development.</p>`
  },
  {
    question: "What is the difference between AngularJS and Angular?",
    slug:'what-is-the-difference-between-angularjs-and-angular',
    answer: `<h3 id="what-is-the-difference-between-angularjs-and-angular">What is the difference between AngularJS and Angular?</h3>
    <p>Angular is a completely revived component-based framework in which an application is a tree of individual components.</p>
    <p>Here are some of the major differences in tabular format:-</p>
    <table class="table table-bordered">
    <thead>
    <tr>
    <th>AngularJS</th>
    <th>Angular</th>
    </tr>
    </thead>
    <tbody><tr>
    <td>It is based on MVC architecture</td>
    <td>This is based on Service/Controller</td>
    </tr>
    <tr>
    <td>It uses JavaScript to build the application</td>
    <td>Uses TypeScript to build the application</td>
    </tr>
    <tr>
    <td>Based on controllers concept</td>
    <td>This is a component based UI approach</td>
    </tr>
    <tr>
    <td>No support for mobile platforms</td>
    <td>Fully supports mobile platforms</td>
    </tr>
    <tr>
    <td>Difficult to build SEO friendly application</td>
    <td>Ease to build SEO friendly applications</td>
    </tr>
    </tbody></table>
    `
  },
  {
    question:'What is TypeScript?',
    slug:'what-is-typescript',
    answer:  `<h3 id="what-is-typescript">What is TypeScript?</h3>
    <p>TypeScript is a strongly typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await and many other features, and compiles to plain JavaScript. Angular is written entirely in TypeScript as a primary language.
    You can install TypeScript globally as</p>
    
    <pre><code class='language-cmd'>
    npm install -g typescript
    </code></pre>

    <p>Let&#39;s see a simple example of TypeScript usage:-</p>

    <pre><code class='language-typescript'>
    function greeter(person: string) {
        return &quot;Hello, &quot; + person;
    }
    
    let user = &quot;Sudheer&quot;;
    
    document.body.innerHTML = greeter(user);
    </code></pre>
    <p>The greeter method allows only string type as argument.</p>
    `
  },{
    slug: "what-are-lifecycle-hooks-available",
    question: "What are lifecycle hooks available?",
    answer: `<h3 id="what-are-lifecycle-hooks-available">What are lifecycle hooks available?</h3>
    <p>Angular application goes through an entire set of processes or has a lifecycle right from its initiation to the end of the application.
    The representation of lifecycle in pictorial representation as follows,</p>
    <p><img src="assets/angular/lifecycle.png" alt="ScreenShot"></p>
    <p>The description of each lifecycle method is as below,</p>
    <ol>
    <li><strong>ngOnChanges:</strong> When the value of a data bound property changes, then this method is called.</li>
    <li><strong>ngOnInit:</strong> This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.</li>
    <li><strong>ngDoCheck:</strong> This is for the detection and to act on changes that Angular can&#39;t or won&#39;t detect on its own.</li>
    <li><strong>ngAfterContentInit:</strong> This is called in response after Angular projects external content into the component&#39;s view.</li>
    <li><strong>ngAfterContentChecked:</strong> This is called in response after Angular checks the content projected into the component.</li>
    <li><strong>ngAfterViewInit:</strong> This is called in response after Angular initializes the component&#39;s views and child views.</li>
    <li><strong>ngAfterViewChecked:</strong> This is called in response after Angular checks the component&#39;s views and child views.</li>
    <li><strong>ngOnDestroy:</strong> This is the cleanup phase just before Angular destroys the directive/component.</li>
    </ol>
    `
  },{
    slug: "what-is-the-difference-between-constructor-and-ngoninit",
    question: "What is the difference between constructor and ngOnInit?",
    answer: `<h3 id="what-is-the-difference-between-constructor-and-ngoninit">What is the difference between constructor and ngOnInit?</h3>
    <p>The <strong>Constructor</strong> is a default method of the class that is executed when the class is instantiated and ensures proper initialisation of fields in the class and its subclasses. Angular, or better Dependency Injector (DI), analyses the constructor parameters and when it creates a new instance by calling new MyClass() it tries to find providers that match the types of the constructor parameters, resolves them and passes them to the constructor.<br><strong>ngOnInit</strong> is a life cycle hook called by Angular to indicate that Angular is done creating the component.<br>Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn&#39;t do actual &quot;work&quot;.
    So you should use constructor() to setup Dependency Injection and not much else. ngOnInit() is better place to &quot;start&quot; - it&#39;s where/when components&#39; bindings are resolved.</p>
    <pre><code class="language-typescript">
    export class App implements OnInit {
      constructor(private myService: MyService) {
        //called first time before the ngOnInit()
      }
    
      ngOnInit() {
        //called after the constructor and called  after the first ngOnChanges()
        //e.g. http call...
      }
    }
    </code></pre>
    `
  },
  {
    slug: "what-are-the-key-components-of-angular",
    question: "What are the key components of Angular?",
    answer: `<h3 id="what-are-the-key-components-of-angular">What are the key components of Angular?</h3>
    <p>Angular has the key components below,</p>
    <ol>
    <li><strong>Component:</strong> These are the basic building blocks of an Angular application to control HTML views.</li>
    <li><strong>Modules:</strong> An Angular module is a set of angular basic building blocks like components, directives, services etc. An application is divided into logical pieces and each piece of code is called as &quot;module&quot; which perform a single task.</li>
    <li><strong>Templates:</strong> These represent the views of an Angular application.</li>
    <li><strong>Services:</strong> Are used to create components which can be shared across the entire application.</li>
    <li><strong>Metadata:</strong> This can be used to add more data to an Angular class.</li>
    </ol>`
  },
  {
    slug: "what-are-components",
    question: "What are components?",
    answer: `<h3 id="what-are-components">What are components?</h3>
    <p>Components are the most basic UI building block of an Angular app, which form a tree of Angular components. These components are a subset of directives. Unlike directives, components always have a template, and only one component can be instantiated per element in a template.
    Let&#39;s see a simple example of Angular component</p>
    <pre><code class="language-typescript">
    import { Component } from &quot;@angular/core&quot;;
    
    @Component({
      selector: &quot;my-app&quot;,
      template: '
        &lt;div&gt;
          &lt;h1&gt;{{ title }}&lt;/h1&gt;
          &lt;div&gt;Learn Angular6 with examples&lt;/div&gt;
        &lt;/div&gt;
      ',
    })
    export class AppComponent {
      title: string = &quot;Welcome to Angular world&quot;;
    }
    </code></pre>`
  },{
    slug: "what-are-the-differences-between-component-and-directive",
    question: "What are the differences between Component and Directive?",
    answer: `<h3 id="what-are-the-differences-between-component-and-directive">What are the differences between Component and Directive?</h3>
    <p>In a short note, A component(@component) is a directive-with-a-template.</p>
    <p>Some of the major differences are mentioned in a tabular form</p>
    <table class="table table-bordered">
    <thead>
    <tr>
    <th>Component</th>
    <th>Directive</th>
    </tr>
    </thead>
    <tbody><tr>
    <td>To register a component we use @Component meta-data annotation</td>
    <td>To register a directive we use @Directive meta-data annotation</td>
    </tr>
    <tr>
    <td>Components are typically used to create UI widgets</td>
    <td>Directives are used to add behavior to an existing DOM element</td>
    </tr>
    <tr>
    <td>Component is used to break down the application into smaller components</td>
    <td>Directive is used to design re-usable components</td>
    </tr>
    <tr>
    <td>Only one component can be present per DOM element</td>
    <td>Many directives can be used per DOM element</td>
    </tr>
    <tr>
    <td>@View decorator or templateurl/template are mandatory</td>
    <td>Directive doesn&#39;t use View</td>
    </tr>
    </tbody></table>
    `
  },{
    slug: "what-are-dynamic-components",
    question: "What are dynamic components?",
    answer: `<h3 id="what-are-dynamic-components">What are dynamic components?</h3>
    <p>Dynamic components are the components in which the component&#39;s location in the application is not defined at build time i.e. they are not used in any angular template. Instead, the component is instantiated and placed in the application at runtime.</p>
    `
  },{
    slug: "how-do-you-select-an-element-with-in-a-component-template",
    question: "How do you select an element with in a component template?",
    answer: `<h3 id="how-do-you-select-an-element-with-in-a-component-template">How do you select an element with in a component template?</h3>
    <p>You can use <code>@ViewChild</code> directive to access elements in the view directly. Let&#39;s take input element with a reference,</p>
    <pre><code class="language-html">&lt;input #uname /&gt;
    </code></pre>
    <p>and define view child directive and access it in ngAfterViewInit lifecycle hook</p>
    <pre><code class="language-javascript">
    @ViewChild(&#39;uname&#39;) input;
    
    ngAfterViewInit() {
      console.log(this.input.nativeElement.value);
    }
    </code></pre>
    `
  },{
    slug: "what-is-an-entry-component",
    question: "What is an entry component?",
    answer: `<h3 id="what-is-an-entry-component">What is an entry component?</h3>
    <p>An entry component is any component that Angular loads imperatively(i.e, not referencing it in the template) by type. Due to this behavior, they can’t be found by the Angular compiler during compilation. These components created dynamically with <code>ComponentFactoryResolver</code>.</p>
    <p>Basically, there are two main kinds of entry components which are following -</p>
    <ol>
    <li>The bootstrapped root component</li>
    <li>A component you specify in a route</li>
    </ol>
    `
  },{
    slug: "what-is-a-bootstrapped-component",
    question: "What is a bootstrapped component?",
    answer: `<h3 id="what-is-a-bootstrapped-component">What is a bootstrapped component?</h3>
    <p>A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap process or application launch time. Generally, this bootstrapped or root component is named as <code>AppComponent</code> in your root module using <code>bootstrap</code> property as below.</p>
    <pre><code class="language-js">
    @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent] // bootstrapped entry component need to be declared here
    })
    </code></pre>
    `
  },{
    slug: "how-do-you-manually-bootstrap-an-application",
    question: "How do you manually bootstrap an application?",
    answer: `<h3 id="how-do-you-manually-bootstrap-an-application">How do you manually bootstrap an application?</h3>
    <p>You can use <code>ngDoBootstrap</code> hook for a manual bootstrapping of the application instead of using bootstrap array in <code>@NgModule</code> annotation. This hook is part of <code>DoBootstap</code> interface.</p>
    <pre><code class="language-js">
    interface DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef): void;
    }
    </code></pre>
    <p>The module needs to be implement the above interface to use the hook for bootstrapping.</p>
    <pre><code class="language-js">
    class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef) {
      appRef.bootstrap(AppComponent); // bootstrapped entry component need to be passed
    }
    }
    </code></pre>
    `
  },{
    slug: "is-it-necessary-for-bootstrapped-component-to-be-entry-component",
    question: "Is it necessary for bootstrapped component to be entry component?",
    answer: `<h3 id="is-it-necessary-for-bootstrapped-component-to-be-entry-component">Is it necessary for bootstrapped component to be entry component?</h3>
    <p>Yes, the bootstrapped component needs to be an entry component. This is because the bootstrapping process is an imperative process.</p>
    `
  },{
    slug: "is-it-all-components-generated-in-production-build",
    question: "Is it all components generated in production build?",
    answer: `<h3 id="is-it-all-components-generated-in-production-build">Is it all components generated in production build?</h3>
    <p>No, only the entry components and template components appears in production builds. If a component isn&#39;t an entry component and isn&#39;t found in a template, the tree shaker will throw it away. Due to this reason, make sure to add only true entry components to reduce the bundle size.</p>
    `
  },{
    slug: "how-do-you-create-displayblock-components",
    question: "How do you create displayBlock components?",
    answer: `<h3 id="how-do-you-create-displayblock-components">How do you create displayBlock components?</h3>
    <p>By default, Angular CLI creates components in an inline displayed mode(i.e, display:inline). But it is possible to create components with display: block style using <code>displayBlock</code> option,</p>
    <pre><code class="language-js">
      ng generate component my-component --displayBlock
    </code></pre>
    <p>(OR) the option can be turned on by default in Angular.json with <code>schematics.@schematics/angular:component.displayBlock</code> key value as true.</p>
    `
  },{
    slug: "what-is-standalone-component",
    question: "What is standalone component?",
    answer: `<h3 id="what-is-standalone-component">What is standalone component?</h3>
    <p>A standalone component is a type of component which is not part of any Angular module. It provides a simplified way to build Angular applications.</p>
    `
  },{
    slug: "how-to-create-a-standalone-component-uing-cli-command",
    question: "How to create a standalone component uing CLI command?",
    answer: `<h3 id="how-to-create-a-standalone-component-uing-cli-command">How to create a standalone component uing CLI command?</h3>
    <p>Generate standalone component using CLI command as shown below</p>
    <pre><code class="language-bash">
    ng generate component component-name --standalone
    </code></pre>
    <p>On running the command standalone component is created.
    Here is the list of file created.</p>
    <ol>
    <li><code>component-name.component.ts</code></li>
    <li><code>component-name.component.css</code></li>
    <li><code>component-name.component.spec</code></li>
    <li><code>component-name.component.html</code></li>
    </ol>
    <p>Next need to update <code>app.module.ts</code> as shown below.</p>
    <pre><code class="language-typescript">
    import { NgModule } from &quot;@angular/core&quot;;
    import { BrowserModule } from &quot;@angular/platform-browser&quot;;
    import { ComponentNameComponent } from &quot;./component-name/component-name.component&quot;;
    
    @NgModule({
    imports: [BrowserModule, ComponentNameComponent],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    })
    export class AppModule {}
    </code></pre>
    `
  },{
    slug: "how-to-create-a-standalone-component-manually",
    question: "How to create a standalone component manually?",
    answer: `<h3 id="how-to-create-a-standalone-component-manually">How to create a standalone component manually?</h3>
    <p>To make existing component to standalone, then add <code>standalone: true</code> in <code>component-name.component.ts</code>
    as shown below</p>
    <pre><code class="language-typescript">
    import { CommonModule } from &quot;@angular/common&quot;;
    import { Component, OnInit } from &quot;@angular/core&quot;;
    
    @Component({
    standalone: true,
    imports: [CommonModule],
    selector: &quot;app-standalone-component&quot;,
    templateUrl: &quot;./standalone-component.component.html&quot;,
    styleUrls: [&quot;./standalone-component.component.css&quot;],
    })
    export class ComponentNameComponent implements OnInit {
    constructor() {}
    
    ngOnInit() {}
    }
    </code></pre>
    <p>Next need to update <code>app.module.ts</code> as shown below.</p>
    <pre><code class="language-typescript">
    import { NgModule } from &quot;@angular/core&quot;;
    import { BrowserModule } from &quot;@angular/platform-browser&quot;;
    import { ComponentNameComponent } from &quot;./component-name/component-name.component&quot;;
    
    @NgModule({
    imports: [BrowserModule, ComponentNameComponent],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    })
    export class AppModule {}
    </code></pre>
    `
  },
  {
    slug: "what-is-a-template",
    question: "What is a template?",
    answer: `<h3 id="what-is-a-template">What is a template?</h3>
    <p>A template is a HTML view where you can display data by binding controls to properties of an Angular component. You can store your component&#39;s template in one of two places. You can define it inline using the template property, or you can define the template in a separate HTML file and link to it in the component metadata using the @Component decorator&#39;s templateUrl property.</p>
    <p><strong>Using inline template with template syntax,</strong></p>
    <pre><code class="language-typescript">
    import { Component } from &#39;@angular/core&#39;;
    
    @Component ({
       selector: &#39;my-app&#39;,
       template: &#39;
          &lt;div&gt;
             &lt;h1&gt;{{title}}&lt;/h1&gt;
             &lt;div&gt;Learn Angular&lt;/div&gt;
          &lt;/div&gt;
       &#39;
    })
    
    export class AppComponent {
       title: string = &#39;Hello World&#39;;
    }
    </code></pre>
    <p><strong>Using separate template file such as app.component.html</strong></p>
    <pre><code class="language-typescript">
    import { Component } from &quot;@angular/core&quot;;
    
    @Component({
      selector: &quot;my-app&quot;,
      templateUrl: &quot;app/app.component.html&quot;,
    })
    export class AppComponent {
      title: string = &quot;Hello World&quot;;
    }                                    |
    </code></pre>
    `
  },{
    slug: "what-is-the-option-to-choose-between-inline-and-external-template-file",
    question: "What is the option to choose between inline and external template file?",
    answer: `<h3 id="what-is-the-option-to-choose-between-inline-and-external-template-file">What is the option to choose between inline and external template file?</h3>
    <p>You can store your component&#39;s template in one of two places. You can define it inline using the <strong>template</strong> property, or you can define the template in a separate HTML file and link to it in the component metadata using the <strong>@Component</strong> decorator&#39;s <strong>templateUrl</strong> property.</p>
    <p>The choice between inline and separate HTML is a matter of taste, circumstances, and organization policy. But normally we use inline template for small portion of code and external template file for bigger views. By default, the Angular CLI generates components with a template file. But you can override that with the below command,</p>
    <pre><code class="language-cmd">
    ng generate component hero -it
    </code></pre>
    `
  },{
    slug: "what-are-template-expressions",
    question: "What are template expressions?",
    answer: `<h3 id="what-are-template-expressions">What are template expressions?</h3>
    <p>A template expression produces a value similar to any Javascript expression. Angular executes the expression and assigns it to a property of a binding target; the target might be an HTML element, a component, or a directive. In the property binding, a template expression appears in quotes to the right of the = symbol as in <code>[property]=&quot;expression&quot;</code>.
    In interpolation syntax, the template expression is surrounded by double curly braces. For example, in the below interpolation, the template expression is <code>{{username}}</code>,</p>
    <pre><code class="language-html">
    &lt;h3&gt;{{username}}, welcome to Angular&lt;/h3&gt;
    </code></pre>
    <p>The below javascript expressions are prohibited in template expression</p>
    <ol>
    <li>assignments (=, +=, -=, ...)</li>
    <li>new</li>
    <li>chaining expressions with ; or ,</li>
    <li>increment and decrement operators (++ and --)</li>
    </ol>
    `
  },{
    slug: "what-are-template-statements",
    question: "What are template statements?",
    answer: `<h3 id="what-are-template-statements">What are template statements?</h3>
    <p>A template statement responds to an event raised by a binding target such as an element, component, or directive. The template statements appear in quotes to the right of the = symbol like <code>(event)=&quot;statement&quot;</code>.</p>
    <p>Let&#39;s take an example of button click event&#39;s statement</p>
    <pre><code class="language-html">
    &lt;button (click)=&quot;editProfile()&quot;&gt;Edit Profile&lt;/button&gt;
    </code></pre>
    <p>In the above expression, editProfile is a template statement. The below JavaScript syntax expressions are not allowed.</p>
    <ol>
    <li>new</li>
    <li>increment and decrement operators, ++ and --</li>
    <li>operator assignment, such as += and -=</li>
    <li>the bitwise operators | and &amp;</li>
    <li>the template expression operators</li>
    </ol>
    `
  }
  ,{
    slug: "what-is-a-module",
    question: "What is a module?",
    answer: `<h3 id="what-is-a-module">What is a module?</h3>
    <p>Modules are logical boundaries in your application and the application is divided into separate modules to separate the functionality of your application.
    Lets take an example of <strong>app.module.ts</strong> root module declared with <strong>@NgModule</strong> decorator as below,</p>
    <pre><code class="language-typescript">
    import { NgModule } from &quot;@angular/core&quot;;
    import { BrowserModule } from &quot;@angular/platform-browser&quot;;
    import { AppComponent } from &quot;./app.component&quot;;
    
    @NgModule({
      imports: [BrowserModule],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
      providers: [],
    })
    export class AppModule {}
    </code></pre>
    <p>The NgModule decorator has five important (among all) options:</p>
    <ol>
    <li>The imports option is used to import other dependent modules. The BrowserModule is required by default for any web based angular application.</li>
    <li>The declarations option is used to define components in the respective module.</li>
    <li>The bootstrap option tells Angular which Component to bootstrap in the application.</li>
    <li>The providers option is used to configure a set of injectable objects that are available in the injector of this module.</li>
    <li>The entryComponents option is a set of components dynamically loaded into the view.</li>
    </ol>
    `
  },
  {
    slug: "what-is-a-bootstrapping-module",
    question: "What is a bootstrapping module?",
    answer: `<h3 id="what-is-a-bootstrapping-module">What is a bootstrapping module?</h3>
    <p>Every application has at least one Angular module, the root module that you bootstrap to launch the application is called as bootstrapping module. It is commonly known as <code>AppModule</code>. The default structure of <code>AppModule</code> generated by AngularCLI would be as follows:</p>
    <pre><code class="language-javascript">
    import { BrowserModule } from &quot;@angular/platform-browser&quot;;
    import { NgModule } from &quot;@angular/core&quot;;
    import { FormsModule } from &quot;@angular/forms&quot;;
    import { HttpClientModule } from &quot;@angular/common/http&quot;;
    
    import { AppComponent } from &quot;./app.component&quot;;
    
    /* the AppModule class with the @NgModule decorator */
    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, FormsModule, HttpClientModule],
      providers: [],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    </code></pre>
    `
  },{
    slug: "what-is-the-purpose-of-common-module",
    question: "What is the purpose of common module?",
    answer: `<h3 id="what-is-the-purpose-of-common-module">What is the purpose of common module?</h3>
    <p>The commonly-needed services, pipes, and directives provided by @angular/common module. Apart from these HttpClientModule is available under @angular/common/http.</p>
    `
  },{
    slug: "what-is-declarable-in-angular",
    question: "What is declarable in Angular?",
    answer: `<h3 id="what-is-declarable-in-angular">What is declarable in Angular?</h3>
    <p>Declarable is a class type that you can add to the declarations list of an NgModule. The class types such as components, directives, and pipes comes can be declared in the module. The structure of declarations would be,</p>
    <pre><code class="language-javascript">
    declarations: [
      YourComponent,
      YourPipe,
      YourDirective
    ],
    </code></pre>
    `
  },{
    slug: "what-are-the-restrictions-on-declarable-classes",
    question: "What are the restrictions on declarable classes?",
    answer: `<h3 id="what-are-the-restrictions-on-declarable-classes">What are the restrictions on declarable classes?</h3>
    <p>Below classes shouldn&#39;t be declared,</p>
    <ol>
    <li>A class that&#39;s already declared in another NgModule</li>
    <li>Ngmodule classes</li>
    <li>Service classes</li>
    <li>Helper classes</li>
    </ol>`
  },{
    slug: "what-happens-if-i-import-the-same-module-twice",
    question: "What happens if I import the same module twice?",
    answer: `<h3 id="what-happens-if-i-import-the-same-module-twice">What happens if I import the same module twice?</h3>
    <p>If multiple modules imports the same module then angular evaluates it only once (When it encounters the module first time). It follows this condition even the module appears at any level in a hierarchy of imported NgModules.</p>`
  },{
    slug: "what-are-the-imported-modules-in-cli-generated-feature-modules",
    question: "What are the imported modules in CLI generated feature modules?",
    answer: `<h3 id="what-are-the-imported-modules-in-cli-generated-feature-modules">What are the imported modules in CLI generated feature modules?</h3>
    <p>In the CLI generated feature module, there are two JavaScript import statements at the top of the file</p>
    <ol>
    <li><strong>NgModule:</strong> InOrder to use the <code>@NgModule</code> decorator</li>
    <li><strong>CommonModule:</strong> It provides many common directives such as <code>ngIf</code> and <code>ngFor</code>.</li>
    </ol>
    `
  },{
    slug: "what-are-the-possible-errors-with-declarations",
    question: "What are the possible errors with declarations?",
    answer: `<h3 id="what-are-the-possible-errors-with-declarations">What are the possible errors with declarations?</h3>
    <p>There are two common possible errors with declarations array,</p>
    <ol>
    <li>If you use a component without declaring it, Angular returns an error message.</li>
    <li>If you try to declare the same class in more than one module then compiler emits an error.</li>
    </ol>
    `
  },{
    slug: "what-are-the-steps-to-use-declaration-elements",
    question: "What are the steps to use declaration elements?",
    answer: `<h3 id="what-are-the-steps-to-use-declaration-elements">What are the steps to use declaration elements?</h3>
    <p>Below are the steps to be followed to use declaration elements.</p>
    <ol>
    <li>Create the element(component, directive and pipes) and export it from the file where you wrote it</li>
    <li>Import it into the appropriate module.</li>
    <li>Declare it in the @NgModule declarations array.</li>
    </ol>
    `
  },
  {
    slug: "what-happens-if-browsermodule-used-in-feature-module",
    question: "What happens if browserModule used in feature module?",
    answer: `<h3 id="what-happens-if-browsermodule-used-in-feature-module">What happens if browserModule used in feature module?</h3>
    <p>If you do import <code>BrowserModule</code> into a lazy loaded feature module, Angular returns an error telling you to use <code>CommonModule</code> instead. Because BrowserModule’s providers are for the entire app so it should only be in the root module, not in feature module. Whereas Feature modules only need the common directives in CommonModule.</p>
    <p><img src="assets/angular/browser-module-error.gif" alt="ScreenShot"></p>
    `
  },{
    slug: "what-are-the-types-of-feature-modules",
    question: "What are the types of feature modules?",
    answer: `<h3 id="what-are-the-types-of-feature-modules">What are the types of feature modules?</h3>
    <p>Below are the five categories of feature modules,</p>
    <ol>
    <li><strong>Domain:</strong> Deliver a user experience dedicated to a particular application domain(For example, place an order, registration etc)</li>
    <li><strong>Routed:</strong> These are domain feature modules whose top components are the targets of router navigation routes.</li>
    <li><strong>Routing:</strong> It provides routing configuration for another module.</li>
    <li><strong>Service:</strong> It provides utility services such as data access and messaging(For example, HttpClientModule)</li>
    <li><strong>Widget:</strong> It makes components, directives, and pipes available to external modules(For example, third-party libraries such as Material UI)</li>
    </ol>
    `
  },{
    slug: "what-is-a-shared-module",
    question: "What is a shared module?",
    answer: `<h3 id="what-is-a-shared-module">What is a shared module?</h3>
    <p>The Shared Module is the module in which you put commonly used directives, pipes, and components into one module that is shared(import it) throughout the application.</p>
    <p>For example, the below shared module imports CommonModule, FormsModule for common directives and components, pipes and directives based on the need,</p>
    <pre><code class="language-js">
    import { CommonModule } from &quot;@angular/common&quot;;
    import { NgModule } from &quot;@angular/core&quot;;
    import { FormsModule } from &quot;@angular/forms&quot;;
    import { UserComponent } from &quot;./user.component&quot;;
    import { NewUserDirective } from &quot;./new-user.directive&quot;;
    import { OrdersPipe } from &quot;./orders.pipe&quot;;
    
    @NgModule({
    imports: [CommonModule],
    declarations: [UserComponent, NewUserDirective, OrdersPipe],
    exports: [
      UserComponent,
      NewUserDirective,
      OrdersPipe,
      CommonModule,
      FormsModule,
    ],
    })
    export class SharedModule {}
    </code></pre>
    `
  },{
    slug: "what-classes-should-not-be-added-to-declarations",
    question: "What classes should not be added to declarations?",
    answer: `<h3 id="what-classes-should-not-be-added-to-declarations">What classes should not be added to declarations?</h3>
    <p>The below class types shouldn&#39;t be added to declarations</p>
    <ol>
    <li>A class which is already declared in any another module.</li>
    <li>Directives imported from another module.</li>
    <li>Module classes.</li>
    <li>Service classes.</li>
    <li>Non-Angular classes and objects, such as strings, numbers, functions, entity models, configurations, business logic, and helper classes.</li>
    </ol>
    `
  },
  {
    slug: "what-are-directives",
    question: "What are directives?",
    answer: `<h3 id="what-are-directives">What are directives?</h3>
    <p>Directives add behaviour to an existing DOM element or an existing component instance.</p>
    <pre><code class="language-typescript"> 
    import { Directive, ElementRef, Input } from &quot;@angular/core&quot;;
    
    @Directive({ selector: &quot;[myHighlight]&quot; })
    export class HighlightDirective {
      constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = &quot;yellow&quot;;
      }
    }
    </code></pre>
    <p>Now this directive extends HTML element behavior with a yellow background as below</p>
    <pre><code class="language-html"> 
    &lt;p myHighlight&gt;Highlight me!&lt;/p&gt; 
    </code></pre>`
  },{
    slug: "what-are-the-various-kinds-of-directives",
    question: "What are the various kinds of directives?",
    answer: `<h3 id="what-are-the-various-kinds-of-directives">What are the various kinds of directives?</h3>
    <p>There are mainly three kinds of directives:</p>
    <ol>
    <li><strong>Components</strong> — These are directives with a template.</li>
    <li><strong>Structural directives</strong> — These directives change the DOM layout by adding and removing DOM elements.</li>
    <li><strong>Attribute directives</strong> — These directives change the appearance or behavior of an element, component, or another directive.</li>
    </ol>
    `
  },{
    slug: "how-do-you-create-directives-using-cli",
    question: "How do you create directives using CLI?",
    answer: `<h3 id="how-do-you-create-directives-using-cli">How do you create directives using CLI?</h3>
    <p>You can use CLI command <code>ng generate directive</code> to create the directive class file. It creates the source file(<code>src/app/components/directivename.directive.ts</code>), the respective test file <code>.spec.ts</code> and declare the directive class file in root module.</p>
    `
  },{
    slug: "give-an-example-for-attribute-directives",
    question: "Give an example for attribute directives?",
    answer: `<h3 id="give-an-example-for-attribute-directives">Give an example for attribute directives?</h3>
    <p>Let&#39;s take simple highlighter behavior as a example directive for DOM element. You can create and apply the attribute directive using below step:</p>
    <ol>
    <li><p>Create HighlightDirective class with the file name <code>src/app/highlight.directive.ts</code>. In this file, we need to import <strong>Directive</strong> from core library to apply the metadata and <strong>ElementRef</strong> in the directive&#39;s constructor to inject a reference to the host DOM element ,</p>
    <pre><code class="language-javascript">import { Directive, ElementRef } from &quot;@angular/core&quot;;
    
    @Directive({
      selector: &quot;[appHighlight]&quot;,
    })
    export class HighlightDirective {
      constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = &quot;red&quot;;
      }
    }
    </code></pre>
    </li>
    <li><p>Apply the attribute directive as an attribute to the host element(for example, <p>)</p>
    <pre><code class="language-javascript">&lt;p appHighlight&gt;Highlight me!&lt;/p&gt;
    </code></pre>
    </li>
    <li><p>Run the application to see the highlight behavior on paragraph element</p>
    <pre><code class="language-javascript">ng serve
    </code></pre>
    </li>
    </ol>
    `
  },{
    slug: "what-is-index-property-in-ngfor-directive",
    question: "What is index property in ngFor directive?",
    answer: `<h3 id="what-is-index-property-in-ngfor-directive">What is index property in ngFor directive?</h3>
    <p>  The index property of the NgFor directive is used to return the zero-based index of the item in each iteration. You can capture the index in a template input variable and use it in the template.</p>
    <p>  For example, you can capture the index in a variable named indexVar and displays it with the todo&#39;s name using ngFor directive as below.</p>
    <pre><code class="language-javascript">
    &lt;div *ngFor=&quot;let todo of todos; let i=index&quot;&gt;{{i + 1}} - {{todo.name}}&lt;/div&gt;
    </code></pre>
    `
  },{
    slug: "what-is-the-purpose-of-ngswitch-directive",
    question: "What is the purpose of ngSwitch directive?",
    answer: `<h3 id="what-is-the-purpose-of-ngswitch-directive">What is the purpose of ngSwitch directive?</h3>
    <p><strong>NgSwitch</strong> directive is similar to JavaScript switch statement which displays one element from among several possible elements, based on a switch condition. In this case only the selected element placed into the DOM. It has been used along with <code>NgSwitch</code>, <code>NgSwitchCase</code> and <code>NgSwitchDefault</code> directives.</p>
    <p>For example, let&#39;s display the browser details based on selected browser using ngSwitch directive.</p>
    <pre><code class="language-javascript">
    &lt;div [ngSwitch]=&quot;currentBrowser.name&quot;&gt;
    &lt;chrome-browser    *ngSwitchCase=&quot;&#39;chrome&#39;&quot;    [item]=&quot;currentBrowser&quot;&gt;&lt;/chrome-browser&gt;
    &lt;firefox-browser   *ngSwitchCase=&quot;&#39;firefox&#39;&quot;     [item]=&quot;currentBrowser&quot;&gt;&lt;/firefox-browser&gt;
    &lt;opera-browser     *ngSwitchCase=&quot;&#39;opera&#39;&quot;  [item]=&quot;currentBrowser&quot;&gt;&lt;/opera-browser&gt;
    &lt;safari-browser     *ngSwitchCase=&quot;&#39;safari&#39;&quot;   [item]=&quot;currentBrowser&quot;&gt;&lt;/safari-browser&gt;
    &lt;ie-browser  *ngSwitchDefault           [item]=&quot;currentItem&quot;&gt;&lt;/ie-browser&gt;
    &lt;/div&gt;
    </code></pre>
    `
  },
  {
    slug: "what-is-a-data-binding",
    question: "What is a data binding?",
    answer: `<h3 id="what-is-a-data-binding">What is a data binding?</h3>
    <p>Data binding is a core concept in Angular and allows to define communication between a component and the DOM, making it very easy to define interactive applications without worrying about pushing and pulling data. There are four forms of data binding(divided as 3 categories) which differ in the way the data is flowing.</p>
    <ol>
    <li><p><strong>From the Component to the DOM:</strong></p>
    <p><strong>Interpolation:</strong> {{ value }}: Adds the value of a property from the component</p>
    <pre><code class="language-html">
    &lt;li&gt;Name: {{ user.name }}&lt;/li&gt;
    &lt;li&gt;Address: {{ user.address }}&lt;/li&gt;
    </code></pre>
    <p><strong>Property binding:</strong> [property]=”value”: The value is passed from the component to the specified property or simple HTML attribute</p>
    <pre><code class="language-html">
    &lt;input type=&quot;email&quot; [value]=&quot;user.email&quot; /&gt;
    </code></pre>
    </li>
    <li><p><strong>From the DOM to the Component:</strong>
    <strong>Event binding: (event)=”function”:</strong> When a specific DOM event happens (eg.: click, change, keyup), call the specified method in the component</p>
    <pre><code class="language-html">
    &lt;button (click)=&quot;logout()&quot;&gt;&lt;/button&gt;
    </code></pre>
    </li>
    <li><p><strong>Two-way binding:</strong>
    <strong>Two-way data binding:</strong> [(ngModel)]=”value”: Two-way data binding allows to have the data flow both ways. For example, in the below code snippet, both the email DOM input and component email property are in sync</p>
    <pre><code class="language-html">
    &lt;input type=&quot;email&quot; [(ngModel)]=&quot;user.email&quot; /&gt;
    </code></pre>
    </li>
    </ol>
    `
  },
  {
    slug: "what-is-interpolation",
    question: "What is interpolation?",
    answer: `<h3 id="what-is-interpolation">What is interpolation?</h3>
    <p>Interpolation is a special syntax that Angular converts into property binding. It’s a convenient alternative to property binding. It is represented by double curly braces({{}}). The text between the braces is often the name of a component property. Angular replaces that name with the string value of the corresponding component property.</p>
    <p>Let&#39;s take an example,</p>
    <pre><code class="language-html">&lt;h3&gt;
      {{title}}
      &lt;img src=&quot;{{url}}&quot; style=&quot;height:30px&quot; /&gt;
    &lt;/h3&gt;
    </code></pre>
    <p>In the example above, Angular evaluates the title and url properties and fills in the blanks, first displaying a bold application title and then a URL.</p>
    `
  },{
    slug: "how-do-you-categorize-data-binding-types",
    question: "How do you categorize data binding types?",
    answer: `<h3 id="how-do-you-categorize-data-binding-types">How do you categorize data binding types?</h3>
    <p>Binding types can be grouped into three categories distinguished by the direction of data flow. They are listed as below,</p>
    <ol>
    <li>From the source-to-view</li>
    <li>From view-to-source</li>
    <li>View-to-source-to-view</li>
    </ol>
    <p>The possible binding syntax can be tabularized as below,</p>
    <table class="table table-bordered">
    <thead>
    <tr>
    <th>Data direction</th>
    <th>Syntax</th>
    <th>Type</th>
    </tr>
    </thead>
    <tbody><tr>
    <td>From the source-to-view(One-way)</td>
    <td>1. {{expression}} 2. [target]=&quot;expression&quot; 3. bind-target=&quot;expression&quot;</td>
    <td>Interpolation, Property, Attribute, Class, Style</td>
    </tr>
    <tr>
    <td>From view-to-source(One-way)</td>
    <td>1. (target)=&quot;statement&quot; 2. on-target=&quot;statement&quot;</td>
    <td>Event</td>
    </tr>
    <tr>
    <td>View-to-source-to-view(Two-way)</td>
    <td>1. [(target)]=&quot;expression&quot; 2. bindon-target=&quot;expression&quot;</td>
    <td>Two-way</td>
    </tr>
    </tbody></table>
    `
  },
  {
    slug: "what-is-metadata",
    question: "What is metadata?",
    answer: `<h3 id="what-is-metadata">What is metadata?</h3>
    <p>Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata is represented by decorators</p>
    <ol>
    <li><p><strong>Class decorators</strong>, e.g. @Component and @NgModule</p>
    <pre><code class="language-typescript">
    import { NgModule, Component } from &quot;@angular/core&quot;;
    
    @Component({
      selector: &quot;my-component&quot;,
      template: &quot;&lt;div&gt;Class decorator&lt;/div&gt;&quot;,
    })
    export class MyComponent {
      constructor() {
        console.log(&quot;Hey I am a component!&quot;);
      }
    }
    
    @NgModule({
      imports: [],
      declarations: [],
    })
    export class MyModule {
      constructor() {
        console.log(&quot;Hey I am a module!&quot;);
      }
    }
    </code></pre>
    </li>
    <li><p><strong>Property decorators</strong> Used for properties inside classes, e.g. @Input and @Output</p>
    <pre><code class="language-typescript">
    import { Component, Input } from &quot;@angular/core&quot;;
    
    @Component({
      selector: &quot;my-component&quot;,
      template: &quot;&lt;div&gt;Property decorator&lt;/div&gt;&quot;,
    })
    export class MyComponent {
      @Input()
      title: string;
    }
    </code></pre>
    </li>
    <li><p><strong>Method decorators</strong> Used for methods inside classes, e.g. @HostListener</p>
    <pre><code class="language-typescript">
    import { Component, HostListener } from &quot;@angular/core&quot;;
    
    @Component({
      selector: &quot;my-component&quot;,
      template: &quot;&lt;div&gt;Method decorator&lt;/div&gt;&quot;,
    })
    export class MyComponent {
      @HostListener(&quot;click&quot;, [&quot;$event&quot;])
      onHostClick(event: Event) {
        // clicked, event available
      }
    }
    </code></pre>
    </li>
    <li><p><strong>Parameter decorators</strong> Used for parameters inside class constructors, e.g. @Inject, @Optional</p>
    <pre><code class="language-typescript">
    import { Component, Inject } from &quot;@angular/core&quot;;
    import { MyService } from &quot;./my-service&quot;;
    
    @Component({
      selector: &quot;my-component&quot;,
      template: &quot;&lt;div&gt;Parameter decorator&lt;/div&gt;&quot;,
    })
    export class MyComponent {
      constructor(@Inject(MyService) myService) {
        console.log(myService); // MyService
      }
    }
    </code></pre>
    </li>
    </ol>
    `
  },{
    slug: "what-is-a-service",
    question: "What is a service?",
    answer: `<h3 id="what-is-a-service">What is a service?</h3>
    <p>A service is used when a common functionality needs to be provided to various modules. Services allow for greater separation of concerns for your application and better modularity by allowing you to extract common functionality out of components.</p>
    <p>Let&#39;s create a repoService which can be used across components,</p>
    <pre><code class="language-typescript">
    import { Injectable } from &quot;@angular/core&quot;;
    import { Http } from &quot;@angular/http&quot;;
    
    @Injectable({
      // The Injectable decorator is required for dependency injection to work
      // providedIn option registers the service with a specific NgModule
      providedIn: &quot;root&quot;, // This declares the service with the root app (AppModule)
    })
    export class RepoService {
      constructor(private http: Http) {}
    
      fetchAll() {
        return this.http.get(&quot;https://api.github.com/repositories&quot;);
      }
    }
    </code></pre>
    <p>The above service uses Http service as a dependency.</p>
    `
  },{
    slug: "what-is-dependency-injection-in-angular",
    question: "What is dependency injection in Angular?",
    answer: `<h3 id="what-is-dependency-injection-in-angular">What is dependency injection in Angular?</h3>
    <p>Dependency injection (DI), is an important application design pattern in which a class asks for dependencies from external sources rather than creating them itself. Angular comes with its own dependency injection framework for resolving dependencies( services or objects that a class needs to perform its function).So you can have your services depend on other services throughout your application.</p>
    `
  },{
    slug: "what-is-a-provider",
    question: "What is a provider?",
    answer: `<h3 id="what-is-a-provider">What is a provider?</h3>
    <p>A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency(aka services created). The service can be provided using Angular CLI as below,</p>
    <pre><code class="language-javascript">
    ng generate service my-service
    </code></pre>
    <p>The created service by CLI would be as below,</p>
    <pre><code class="language-js">
    import { Injectable } from &quot;@angular/core&quot;;
    
    @Injectable({
    providedIn: &quot;root&quot;, //Angular provide the service in root injector
    })
    export class MyService {}
    </code></pre>
    `
  },{
    slug: "what-is-the-recommendation-for-provider-scope",
    question: "What is the recommendation for provider scope?",
    answer: `<h3 id="what-is-the-recommendation-for-provider-scope">What is the recommendation for provider scope?</h3>
    <p>You should always provide your service in the root injector unless there is a case where you want the service to be available only if you import a particular @NgModule.</p>
    `
  },{
    slug: "how-do-you-restrict-provider-scope-to-a-module",
    question: "How do you restrict provider scope to a module?",
    answer: `<h3 id="how-do-you-restrict-provider-scope-to-a-module">How do you restrict provider scope to a module?</h3>
    <p>It is possible to restrict service provider scope to a specific module instead making available to entire application. There are two possible ways to do it.</p>
    <ol>
    <li><strong>Using providedIn in service:</strong></li>
    </ol>
    <pre><code class="language-js">
    import { Injectable } from &quot;@angular/core&quot;;
    import { SomeModule } from &quot;./some.module&quot;;
    
    @Injectable({
      providedIn: SomeModule,
    })
    export class SomeService {}
    </code></pre>
    <ol start="2">
    <li><strong>Declare provider for the service in module:</strong></li>
    </ol>
    <pre><code class="language-js">
    import { NgModule } from &quot;@angular/core&quot;;
    
    import { SomeService } from &quot;./some.service&quot;;
    
    @NgModule({
      providers: [SomeService],
    })
    export class SomeModule {}
    </code></pre>
    `
  },{
    slug: "how-do-you-provide-a-singleton-service",
    question: "How do you provide a singleton service?",
    answer: `<h3 id="how-do-you-provide-a-singleton-service">How do you provide a singleton service?</h3>
    <p>There are two possible ways to provide a singleton service.</p>
    <ol>
    <li>Set the providedIn property of the @Injectable() to &quot;root&quot;. This is the preferred way(starting from Angular 6.0) of creating a singleton service since it makes your services tree-shakable.</li>
    </ol>
    <pre><code class="language-js">
    import { Injectable } from &quot;@angular/core&quot;;
    
    @Injectable({
      providedIn: &quot;root&quot;,
    })
    export class MyService {}
    </code></pre>
    <ol start="2">
    <li>Include the service in root module or in a module that is only imported by root module. It has been used to register services before Angular 6.0.</li>
    </ol>
    <pre><code class="language-js">
    @NgModule({
      ...
      providers: [MyService],
      ...
    })
    </code></pre>
    `
  },{
    slug: "what-are-the-different-ways-to-remove-duplicate-service-registration",
    question: "What are the different ways to remove duplicate service registration?",
    answer: `<h3 id="what-are-the-different-ways-to-remove-duplicate-service-registration">What are the different ways to remove duplicate service registration?</h3>
    <p>If a module defines provides and declarations then loading the module in multiple feature modules will duplicate the registration of the service. Below are the different ways to prevent this duplicate behavior.</p>
    <ol>
    <li>Use the providedIn syntax instead of registering the service in the module.</li>
    <li>Separate your services into their own module.</li>
    <li>Define forRoot() and forChild() methods in the module.</li>
    </ol>
    `
  },{
    slug: "can-i-share-services-using-modules",
    question: "Can I share services using modules?",
    answer: `<h3 id="can-i-share-services-using-modules">Can I share services using modules?</h3>
    <p>No, it is not recommended to share services by importing module. i.e Import modules when you want to use directives, pipes, and components only. The best approach to get a hold of shared services is through &#39;Angular dependency injection&#39; because importing a module will result in a new service instance.</p>
    `
  },{
    slug: "how-do-you-configure-injectors-with-providers-at-different-levels",
    question: "How do you configure injectors with providers at different levels?",
    answer: `<h3 id="how-do-you-configure-injectors-with-providers-at-different-levels">How do you configure injectors with providers at different levels?</h3>
    <p>You can configure injectors with providers at different levels of your application by setting a metadata value. The configuration can happen in one of three places,</p>
    <ol>
    <li>In the <code>@Injectable()</code> decorator for the service itself</li>
    <li>In the <code>@NgModule()</code> decorator for an NgModule</li>
    <li>In the <code>@Component()</code> decorator for a component</li>
    </ol>
    `
  },{
    slug: "is-it-mandatory-to-use-injectable-on-every-service-class",
    question: "Is it mandatory to use injectable on every service class?",
    answer: `<h3 id="is-it-mandatory-to-use-injectable-on-every-service-class">Is it mandatory to use injectable on every service class?</h3>
    <p>No. The <code>@Injectable()</code> decorator is not strictly required if the class has other Angular decorators on it or does not have any dependencies. But the important thing here is any class that is going to be injected with Angular is decorated.
    i.e, If we add the decorator, the metadata <code>design:paramtypes</code> is added, and the dependency injection can do it&#39;s job. That is the exact reason to add the @Injectable() decorator on a service if this service has some dependencies itself.
    For example, Let&#39;s see the different variations of AppService in a root component,</p>
    <ol>
    <li>The below AppService can be injected in AppComponent without any problems. This is because there are no dependency services inside AppService.</li>
    </ol>
    <pre><code class="language-js">
    export class AppService {
      constructor() {
        console.log(&quot;A new app service&quot;);
      }
    }
    </code></pre>
    <ol start="2">
    <li>The below AppService with dummy decorator and httpService can be injected in AppComponent without any problems. This is because meta information is generated with dummy decorator.</li>
    </ol>
    <pre><code class="language-js">
    function SomeDummyDecorator() {
    return (constructor: Function) =&gt; console.log(constructor);
    }
    
        @SomeDummyDecorator()
        export class AppService {
          constructor(http: HttpService) {
            console.log(http);
          }
        }
    </code></pre>
    <p>  and the generated javascript code of above service has meta information about HttpService,</p>
    <pre><code class="language-typescript">  
    var AppService = (function () {
          function AppService(http) {
              console.log(http);
          }
          AppService = __decorate([
              core_1.Injectable(),
              __metadata(&#39;design:paramtypes&#39;, [http_service_1.HttpService])
          ], AppService);
          return AppService;
      }());
      exports.AppService = AppService;
    </code></pre>
    <ol start="3">
    <li>The below AppService with @injectable decorator and httpService can be injected in AppComponent without any problems. This is because meta information is generated with Injectable decorator.</li>
    </ol>
    <pre><code class="language-js">
    @Injectable({
      providedIn: &quot;root&quot;,
    })
    export class AppService {
      constructor(http: HttpService) {
        console.log(http);
      }
    }
    </code></pre>
    `
  },{
    slug: "what-is-an-optional-dependency",
    question: "What is an optional dependency?",
    answer: `<h3 id="what-is-an-optional-dependency">What is an optional dependency?</h3>
    <p>The optional dependency is a parameter decorator to be used on constructor parameters, which marks the parameter as being an optional dependency. Due to this, the DI framework provides null if the dependency is not found.
    For example, If you don&#39;t register a logger provider anywhere, the injector sets the value of logger(or logger service) to null in the below class.</p>
    <pre><code class="language-js">
    import { Optional } from &#39;@angular/core&#39;;
    
    constructor(@Optional() private logger?: Logger) {
    if (this.logger) {
      this.logger.log(&#39;This is an optional dependency message&#39;);
    } else {
      console.log(&#39;The logger is not registered&#39;);
    }
    }
    </code></pre>
    `
  },{
    slug: "what-are-the-types-of-injector-hierarchies",
    question: "What are the types of injector hierarchies?",
    answer: `<h3 id="what-are-the-types-of-injector-hierarchies">What are the types of injector hierarchies?</h3>
    <p>There are two types of injector hierarchies in Angular</p>
    <ol>
    <li><strong>ModuleInjector hierarchy:</strong> It configure on a module level using an @NgModule() or @Injectable() annotation.</li>
    <li><strong>ElementInjector hierarchy:</strong> It created implicitly at each DOM element. Also it is empty by default unless you configure it in the providers property on @Directive() or @Component().</li>
    </ol>
    `
  },
  {
    slug: "what-are-pipes",
    question: "What are pipes?",
    answer: `<h3 id="what-are-pipes">What are pipes?</h3>
    <p>Pipes are simple functions that use <a href="#what-are-template-expressions">template expressions</a> to accept data as input and transform it into a desired output. For example, let us take a pipe to transform a component&#39;s birthday property into a human-friendly date using <strong>date</strong> pipe.</p>
    <pre><code class="language-javascript">
    import { Component } from &quot;@angular/core&quot;;
    
    @Component({
      selector: &quot;app-birthday&quot;,
      template: '&lt;p&gt;Birthday is {{ birthday | date }}&lt;/p&gt;',
    })
    export class BirthdayComponent {
      birthday = new Date(1987, 6, 18); // June 18, 1987
    }
    </code></pre>
    `
  },{
    slug: "what-is-the-difference-between-pure-and-impure-pipe",
    question: "What is the difference between pure and impure pipe?",
    answer: `<h3 id="what-is-the-difference-between-pure-and-impure-pipe">What is the difference between pure and impure pipe?</h3>
    <p>A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe. For example, any changes to a primitive input value (String, Number, Boolean, Symbol) or a changed object reference (Date, Array, Function, Object). An impure pipe is called for every change detection cycle no matter whether the value or parameters changes. i.e, An impure pipe is called often, as often as every keystroke or mouse-move.</p>
    `
  },{
    slug: "what-is-a-parameterized-pipe",
    question: "What is a parameterized pipe?",
    answer: `<h3 id="what-is-a-parameterized-pipe">What is a parameterized pipe?</h3>
    <p>A pipe can accept any number of optional parameters to fine-tune its output. The parameterized pipe can be created by declaring the pipe name with a colon ( : ) and then the parameter value. If the pipe accepts multiple parameters, separate the values with colons. Let&#39;s take a birthday example with a particular format(dd/MM/yyyy):</p>
    <pre><code class="language-javascript">
    import { Component } from &quot;@angular/core&quot;;
    
    @Component({
      selector: &quot;app-birthday&quot;,
      template: '&lt;p&gt;Birthday is {{ birthday | date : &quot;dd/MM/yyyy&quot; }}&lt;/p&gt;', // 18/06/1987
    })
    export class BirthdayComponent {
      birthday = new Date(1987, 6, 18);
    }
    </code></pre>
    <p><strong>Note:</strong> The parameter value can be any valid template expression, such as a string literal or a component property.</p>
    `
  },{
    slug: "how-do-you-chain-pipes",
    question: "How do you chain pipes?",
    answer: `<h3 id="how-do-you-chain-pipes">How do you chain pipes?</h3>
    <p>You can chain pipes together in potentially useful combinations as per the needs. Let&#39;s take a birthday property which uses date pipe(along with parameter) and uppercase pipes as below</p>
    <pre><code class="language-javascript">
    import { Component } from &quot;@angular/core&quot;;
    
    @Component({
      selector: &quot;app-birthday&quot;,
      template: '&lt;p&gt;
        Birthday is {{ birthday | date : &quot;fullDate&quot; | uppercase }}
      &lt;/p&gt;', // THURSDAY, JUNE 18, 1987
    })
    export class BirthdayComponent {
      birthday = new Date(1987, 6, 18);
    }
    </code></pre>`
  },{
    slug: "what-is-a-custom-pipe",
    question: "What is a custom pipe?",
    answer: `<h3 id="what-is-a-custom-pipe">What is a custom pipe?</h3>
    <p>Apart from built-in pipes, you can write your own custom pipe with the below key characteristics:</p>
    <ol>
    <li>A pipe is a class decorated with pipe metadata <code>@Pipe</code> decorator, which you import from the core Angular library
    For example,
    <pre><code class="language-javascript">    
    @Pipe({name: &#39;myCustomPipe&#39;})
    </code></pre>
    </li>
    <li>The pipe class implements the <strong>PipeTransform</strong> interface&#39;s transform method that accepts an input value followed by optional parameters and returns the transformed value.
    The structure of <code>PipeTransform</code> would be as below,
    <pre><code class="language-javascript">
    interface PipeTransform {
      transform(value: any, ...args: any[]): any;
    }
    </code></pre>
    </li>
    <li>The <code>@Pipe</code> decorator allows you to define the pipe name that you&#39;ll use within template expressions. It must be a valid JavaScript identifier.
    <pre><code class="language-javascript">
    template: '{{someInputValue | myCustomPipe: someOtherValue}}';
    </code></pre>
    </li>
    </ol>
    `
  },{
    slug: "what-is-the-purpose-of-async-pipe",
    question: "What is the purpose of async pipe?",
    answer: `<h3 id="what-is-the-purpose-of-async-pipe">What is the purpose of async pipe?</h3>
    <p>The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes.</p>
    <p>Let&#39;s take a time observable which continuously updates the view for every 2 seconds with the current time.</p>
    <pre><code class="language-typescript">
    @Component({
      selector: &quot;async-observable-pipe&quot;,
      template: '&lt;div&gt;
        &lt;code&gt;observable|async&lt;/code&gt;: Time: {{ time | async }}
      &lt;/div&gt;',
    })
    export class AsyncObservablePipeComponent {
      time: Observable&lt;string&gt;;
      constructor() {
        this.time = new Observable((observer) =&gt; {
          setInterval(() =&gt; {
            observer.next(new Date().toString());
          }, 2000);
        });
      }
    }
    </code></pre>
    `
  },{
    slug: "what-is-slice-pipe",
    question: "What is slice pipe?",
    answer: `<h3 id="what-is-slice-pipe">What is slice pipe?</h3>
    <p>  The slice pipe is used to create a new Array or String containing a subset (slice) of the elements. The syntax looks like as below,</p>
    <pre><code class="language-javascript">
    {{ value_expression | slice : start [ : end ] }}
    </code></pre>
    <p>  For example, you can provide &#39;hello&#39; list based on a greeting array,</p>
    <pre><code class="language-javascript">
    @Component({
      selector: &quot;list-pipe&quot;,
      template: '&lt;ul&gt;
        &lt;li *ngFor=&quot;let i of greeting | slice : 0 : 5&quot;&gt;{{ i }}&lt;/li&gt;
      &lt;/ul&gt;',
    })
    export class PipeListComponent {
      greeting: string[] = [
        &quot;h&quot;,
        &quot;e&quot;,
        &quot;l&quot;,
        &quot;l&quot;,
        &quot;o&quot;,
        &quot;m&quot;,
        &quot;o&quot;,
        &quot;r&quot;,
        &quot;n&quot;,
        &quot;i&quot;,
        &quot;n&quot;,
        &quot;g&quot;,
      ];
    }
    </code></pre>
    `
  },{
    slug: "what-is-angular-router",
    question: "What is Angular Router?",
    answer: `<h3 id="what-is-angular-router">What is Angular Router?</h3>
    <p>Angular Router is a mechanism in which navigation happens from one view to the next as users perform application tasks. It borrows the concepts or model of browser&#39;s application navigation. It enables developers to build Single Page Applications with multiple views and allow navigation between these views.</p>
    `
  },{
    slug: "what-is-the-purpose-of-base-href-tag",
    question: "What is the purpose of base href tag?",
    answer: `<h3 id="what-is-the-purpose-of-base-href-tag">What is the purpose of base href tag?</h3>
    <p>The routing application should add <base> element to the index.html as the first child in the <head> tag in order to indicate how to compose navigation URLs. If app folder is the application root then you can set the href value as below</p>
    <pre><code class="language-html">
    &lt;base href=&quot;/&quot; /&gt;
    </code></pre>
    `
  },{
    slug: "what-are-the-router-imports",
    question: "What are the router imports?",
    answer: `<h3 id="what-are-the-router-imports">What are the router imports?</h3>

    <p>The Angular Router, which represents a particular component view for a given URL, is not part of Angular Core. It is available in the library named <code>@angular/router</code> to import required router components. For example, we import them in the app module as below,</p>
    
    <pre><code class="language-javascript">
      import { RouterModule, Routes } from "@angular/router";
    </code></pre>`
  },{
    slug: "what-is-router-outlet",
    question: "What is router outlet?",
    answer: `<h3 id="what-is-router-outlet">What is router outlet?</h3>

    <p>The RouterOutlet is a directive from the router library and it acts as a placeholder that marks the spot in the template where the router should display the components for that outlet. Router outlet is used like a component,</p>

    <pre><code class="language-html">
      &lt;router-outlet&gt;&lt;/router-outlet&gt;
    </code></pre>`
 },{
  slug: "what-are-router-links",
  question: "What are router links?",
  answer: `<h3 id="what-are-router-links">What are router links?</h3>

  <p>The RouterLink is a directive on the anchor tags give the router control over those elements. Since the navigation paths are fixed, you can assign string values to router-link directive as below,</p>

  <pre><code class="language-html">
  &lt;h1&gt;Angular Router&lt;/h1&gt;
  &lt;nav&gt;
    &lt;a routerLink=&quot;/todosList&quot;&gt;List of todos&lt;/a&gt;
    &lt;a routerLink=&quot;/completed&quot;&gt;Completed todos&lt;/a&gt;
  &lt;/nav&gt;
  &lt;router-outlet&gt;&lt;/router-outlet&gt;
  </code></pre>`
},{
  slug: "what-are-active-router-links",
  question: "What are active router links?",
  answer: `<h3 id="what-are-active-router-links" class="question">What are active router links?</h3>

  <p class="answer">RouterLinkActive is a directive that toggles CSS classes for active RouterLink bindings based on the current RouterState. i.e., The Router will add CSS classes when this link is active and remove when the link is inactive. For example, you can add them to RouterLinks as below.</p>

  <pre><code class="language-html">
  &lt;h1&gt;Angular Router&lt;/h1&gt;
  &lt;nav&gt;
    &lt;a routerLink="/todosList" routerLinkActive="active"&gt;List of todos&lt;/a&gt;
    &lt;a routerLink="/completed" routerLinkActive="active"&gt;Completed todos&lt;/a&gt;
  &lt;/nav&gt;
  &lt;router-outlet&gt;&lt;/router-outlet&gt;
  </code></pre>`
},{
  slug: "what-is-router-state",
  question: "What is router state?",
  answer: `<h3 id="what-is-router-state" class="question">What is router state?</h3>

  <p class="answer">RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL segments, the extracted parameters, and the resolved data. You can access the current RouterState from anywhere in the application using the <code>Router service</code> and the <code>routerState</code> property.</p>

  <pre><code class="language-javascript">
  @Component({ templateUrl: "template.html" })
  class MyComponent {
    constructor(router: Router) {
      const state: RouterState = router.routerState;
      const root: ActivatedRoute = state.root;
      const child = root.firstChild;
      const id: Observable<string> = child.params.map((p) => p.id);
      //...
    }
  }
  </code></pre>`
},{
  slug: "what-are-router-events",
  question: "What are router events?",
  answer: `<h3 id="what-are-router-events" class="question">What are router events?</h3>

  <p class="answer">During each navigation, the Router emits navigation events through the <code>Router.events</code> property allowing you to track the lifecycle of the route.</p>

  <p class="answer">The sequence of router events is as below,</p>

  <ol class="answer">
      <li>NavigationStart</li>
      <li>RouteConfigLoadStart</li>
      <li>RouteConfigLoadEnd</li>
      <li>RoutesRecognized</li>
      <li>GuardsCheckStart</li>
      <li>ChildActivationStart</li>
      <li>ActivationStart</li>
      <li>GuardsCheckEnd</li>
      <li>ResolveStart</li>
      <li>ResolveEnd</li>
      <li>ActivationEnd</li>
      <li>ChildActivationEnd</li>
      <li>NavigationEnd</li>
      <li>NavigationCancel</li>
      <li>NavigationError</li>
      <li>Scroll</li>
  </ol>`
},{
  slug: "what-is-activated-route",
  question: "What is activated route?",
  answer: `<h3 id="what-is-activated-route" class="question">What is activated route?</h3>

  <p class="answer">ActivatedRoute contains the information about a route associated with a component loaded in an outlet. It can also be used to traverse the router state tree. The ActivatedRoute will be injected as a router service to access the information. In the below example, you can access route path and parameters,</p>

  <pre><code class="language-javascript">
  @Component({...})
  class MyComponent {
    constructor(route: ActivatedRoute) {
      const id: Observable<string> = route.params.pipe(map(p => p.id));
      const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
      // route.data includes both \`data\` and \`resolve\`
      const user = route.data.pipe(map(d => d.user));
    }
  }
  </code></pre>`
},{
  slug: "how-do-you-define-routes",
  question: "How do you define routes?",
  answer: `<h3 id="how-do-you-define-routes" class="question">How do you define routes?</h3>

  <p class="answer">A router must be configured with a list of route definitions. You configure the router with routes via the <code>RouterModule.forRoot()</code> method, and add the result to the AppModule's <code>imports</code> array.</p>

  <pre><code class="language-javascript">
  const appRoutes: Routes = [
    { path: 'todo/:id',      component: TodoDetailComponent },
    {
      path: 'todos',
      component: TodosListComponent,
      data: { title: 'Todos List' }
    },
    { path: '',
      redirectTo: '/todos',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    ...
  })
  export class AppModule { }
  </code></pre>`
},{
  slug: "what-is-the-purpose-of-wildcard-route",
  question: "What is the purpose of Wildcard route?",
  answer: `<h3 id="what-is-the-purpose-of-wildcard-route" class="question">What is the purpose of Wildcard route?</h3>

  <p class="answer">If the URL doesn't match any predefined routes then it causes the router to throw an error and crash the app. In this case, you can use wildcard route. A wildcard route has a path consisting of two asterisks to match every URL.</p>

  <p class="answer">For example, you can define PageNotFoundComponent for wildcard route as below</p>

  <pre><code class="language-javascript">
  { path: '**', component: PageNotFoundComponent }
  </code></pre>`
},
{
  slug: "do-i-need-a-routing-module-always",
  question: "Do I need a Routing Module always?",
  answer: `<h3 id="do-i-need-a-routing-module-always" class="question">Do I need a Routing Module always?</h3>

  <p class="answer">No, the Routing Module is a design choice. You can skip routing Module (for example, AppRoutingModule) when the configuration is simple and merge the routing configuration directly into the companion module (for example, AppModule). But it is recommended when the configuration is complex and includes specialized guard and resolver services.</p>`
},{
  slug: "how-do-you-detect-route-change-in-angular",
  question: "How do you detect route change in Angular?",
  answer: `<h3 id="how-do-you-detect-route-change-in-angular" class="question">How do you detect route change in Angular?</h3>

  <p class="answer">In Angular7, you can subscribe to router to detect the changes. The subscription for router events would be as below,</p>

  <pre><code class="language-javascript">
      this.router.events.subscribe((event: Event) => {});
  </code></pre>

  <p class="answer">Let's take a simple component to detect router changes</p>

  <pre><code class="language-javascript">
  import { Component } from '@angular/core';
  import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

  @Component({
      selector: 'app-root',
      template: \`<router-outlet></router-outlet>\`
  })
  export class AppComponent {

      constructor(private router: Router) {

          this.router.events.subscribe((event: Event) => {
              if (event instanceof NavigationStart) {
                  // Show loading indicator and perform an action
              }

              if (event instanceof NavigationEnd) {
                  // Hide loading indicator and perform an action
              }

              if (event instanceof NavigationError) {
                  // Hide loading indicator and perform an action
                  console.log(event.error); // It logs an error for debugging
              }
          });
      }
  }
  </code></pre>`
},
{
  slug: "what-is-lazy-loading",
  question: "What is lazy loading?",
  answer: `<h3 id="what-is-lazy-loading" class="question">What is lazy loading?</h3>

  <p class="answer">Lazy loading is one of the most useful concepts of Angular Routing. It helps us to download the web pages in chunks instead of downloading everything in a big bundle. It is used for lazy loading by asynchronously loading the feature module for routing whenever required using the property <code>loadChildren</code>. Let's load both <code>Customer</code> and <code>Order</code> feature modules lazily as below,</p>

  <pre><code class="language-javascript">
  const routes: Routes = [
    {
      path: "customers",
      loadChildren: () =>
        import("./customers/customers.module").then(
          (module) => module.CustomersModule
        ),
    },
    {
      path: "orders",
      loadChildren: () =>
        import("./orders/orders.module").then(
          (module) => module.OrdersModule
        ),
    },
    {
      path: "",
      redirectTo: "",
      pathMatch: "full",
    },
  ];
  </code></pre>`
},{
  slug: "what-is-a-routed-entry-component",
  question: "What is a routed entry component?",
  answer: `<h3 id="what-is-a-routed-entry-component" class="question">What is a routed entry component?</h3>

  <p class="answer">The components referenced in router configuration are called as routed entry components. This routed entry component defined in a route definition as below,</p>

  <pre><code class="language-javascript">
  const routes: Routes = [
    {
      path: "",
      component: TodoListComponent, // router entry component
    },
  ];
  </code></pre>

  <p class="answer">Since router definition requires you to add the component in two places (router and entryComponents), these components are always entry components.</p>

  <p class="note"><strong>Note:</strong> The compilers are smart enough to recognize a router definition and automatically add the router component into <code>entryComponents</code>.</p>`
},{
  slug: "how-does-forroot-method-helpful-to-avoid-duplicate-router-instances",
  question: "How does forRoot method helpful to avoid duplicate router instances?",
  answer: `<h3 id="how-does-forroot-method-helpful-to-avoid-duplicate-router-instances" class="question">How does forRoot method helpful to avoid duplicate router instances?</h3>

  <p class="answer">If the <code>RouterModule</code> module didn’t have <code>forRoot()</code> static method then each feature module would instantiate a new Router instance, which leads to broken application due to duplicate instances. After using <code>forRoot()</code> method, the root application module imports <code>RouterModule.forRoot(...)</code> and gets a Router, and all feature modules import <code>RouterModule.forChild(...)</code> which does not instantiate another Router.</p>`
},
{
  slug: "how-do-you-get-the-current-route",
  question: "How do you get the current route?",
  answer: `<h3 id="how-do-you-get-the-current-route" class="question">How do you get the current route?</h3>

  <p class="answer">In Angular, there is an <code>url</code> property of router package to get the current route. You need to follow the below few steps,</p>

  <ol class="answer">
      <li>Import Router from @angular/router</li>
  </ol>

  <pre><code class="language-javascript">
  import { Router } from "@angular/router";
  </code></pre>

  <ol class="answer" start="2">
      <li>Inject router inside constructor</li>
  </ol>

  <pre><code class="language-javascript">
  constructor(private router: Router ) {

  }
  </code></pre>

  <ol class="answer" start="3">
      <li>Access url parameter</li>
  </ol>

  <pre><code class="language-javascript">
  console.log(this.router.url); //  /routename
  </code></pre>`
},{
  slug: "what-is-httpclient-and-its-benefits",
  question: "What is HttpClient and its benefits?",
  answer: `<h3 id="what-is-httpclient-and-its-benefits" class="question">What is HttpClient and its benefits?</h3>

  <p class="answer">Most of the Front-end applications communicate with backend services over <code>HTTP</code> protocol using either <code>XMLHttpRequest</code> interface or the <code>fetch()</code> API. Angular provides a simplified client HTTP API known as <code>HttpClient</code> which is based on top of <code>XMLHttpRequest</code> interface. This client is available from <code>@angular/common/http</code> package.
  You can import in your root module as below:</p>

  <pre><code class="language-javascript">
  import { HttpClientModule } from "@angular/common/http";
  </code></pre>

  <p class="answer">The major advantages of HttpClient can be listed as below,</p>

  <ol class="answer">
      <li>Contains testability features</li>
      <li>Provides typed request and response objects</li>
      <li>Intercept request and response</li>
      <li>Supports Observalbe APIs</li>
      <li>Supports streamlined error handling</li>
  </ol>`
},
{
  slug: "explain-on-how-to-use-httpclient-with-an-example",
  question: "Explain on how to use `HttpClient` with an example?",
  answer: `<h3 id="explain-on-how-to-use-httpclient-with-an-example" class="question">Explain on how to use <code>HttpClient</code> with an example?</h3>

  <p class="answer">Below are the steps need to be followed for the usage of <code>HttpClient</code>.</p>

  <ol class="answer">
      <li>Import <code>HttpClient</code> into root module:</li>
  </ol>

  <pre><code class="language-javascript">
  import { HttpClientModule } from '@angular/common/http';
  @NgModule({
    imports: [
      BrowserModule,
      // import HttpClientModule after BrowserModule.
      HttpClientModule,
    ],
    ......
    })
  export class AppModule {}
  </code></pre>

  <ol class="answer" start="2">
      <li>Inject the <code>HttpClient</code> into the application:</li>
  </ol>

  <pre><code class="language-javascript">
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  const userProfileUrl: string = 'assets/data/profile.json';

  @Injectable()
  export class UserProfileService {
    constructor(private http: HttpClient) { }

    getUserProfile() {
      return this.http.get(this.userProfileUrl);
    }
  }
  </code></pre>

  <ol class="answer" start="3">
      <li>Create a component for subscribing service:</li>
  </ol>

  <pre><code class="language-javascript">
  import { Component } from '@angular/core';
  import { UserProfileService } from './userprofile.service';
  import { User } from './user.model';

  @Component({
    selector: 'app-userprofile',
    templateUrl: './userprofile.component.html',
    styleUrls: ['./userprofile.component.css']
  })
  export class UserProfileComponent {

    user: User;
    error: string;

    constructor(private userProfileService: UserProfileService) { }

    fetchUserProfile() {
      this.userProfileService.getUserProfile()
        .subscribe(
          (data: User) => this.user = data,
          error => this.error = error
        );
    }
  }
  </code></pre>`
},
{
  slug: "how-can-you-read-full-response",
  question: "How can you read full response?",
  answer: `<h3 id="how-can-you-read-full-response" class="question">How can you read full response?</h3>

  <p class="answer">The response body doesn't or may not return full response data because sometimes servers also return special headers or status code, which are important for the application workflow. In order to get the full response, you should use <code>observe</code> option from <code>HttpClient</code>:</p>

  <pre><code class="language-javascript">
  getUserResponse(): Observable&lt;HttpResponse&lt;User&gt;&gt; {
    return this.http.get&lt;User&gt;(
      this.userUrl, { observe: 'response' });
  }
  </code></pre>

  <p class="answer">Now <code>HttpClient.get()</code> method returns an Observable of typed <code>HttpResponse</code> rather than just the <code>JSON</code> data.</p>`
},
{
  slug: "how-do-you-perform-error-handling",
  question: "How do you perform Error handling?",
  answer: `<h3 id="how-do-you-perform-error-handling" class="question">How do you perform Error handling?</h3>

  <p class="answer">If the request fails on the server or fails to reach the server due to network issues, then <code>HttpClient</code> will return an error object instead of a successful reponse. In this case, you need to handle in the component by passing <code>error</code> object as a second callback to <code>subscribe()</code> method.</p>

  <p class="answer">Let's see how it can be handled in the component with an example,</p>

  <pre><code class="language-javascript">
  fetchUser() {
    this.userService.getProfile()
      .subscribe(
        (data: User) => this.userProfile = { ...data }, // success path
        error => this.error = error // error path
      );
  }
  </code></pre>

  <p class="answer">It is always a good idea to give the user some meaningful feedback instead of displaying the raw error object returned from <code>HttpClient</code>.</p>`
},{
  slug: "what-are-http-interceptors",
  question: "What are Http Interceptors?",
  answer: `<h3 id="what-are-http-interceptors" class="question">What are Http Interceptors?</h3>

  <p class="answer">Http Interceptors are part of <code>@angular/common/http</code>, which inspect and transform HTTP requests from your application to the server and vice-versa on HTTP responses. These interceptors can perform a variety of implicit tasks, from authentication to logging.</p>

  <p class="answer">The syntax of <code>HttpInterceptor</code> interface looks like as below,</p>

  <pre><code class="language-javascript">
  interface HttpInterceptor {
    intercept(
      req: HttpRequest&lt;any&gt;,
      next: HttpHandler
    ): Observable&lt;HttpEvent&lt;any&gt;&gt;;
  }
  </code></pre>

  <p class="answer">You can use interceptors by declaring a service class that implements the <code>intercept()</code> method of the <code>HttpInterceptor</code> interface.</p>

  <pre><code class="language-javascript">
  @Injectable()
  export class MyInterceptor implements HttpInterceptor {
      constructor() {}
      intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler): Observable&lt;HttpEvent&lt;any&gt;&gt; {
          ...
      }
  }
  </code></pre>

  <p class="answer">After that you can use it in your module,</p>

  <pre><code class="language-javascript">
  @NgModule({
      ...
      providers: [
          {
              provide: HTTP_INTERCEPTORS,
              useClass: MyInterceptor,
              multi: true
          }
      ]
      ...
  })
  export class AppModule {}
  </code></pre>`
},
{
  slug: "what-are-the-applications-of-http-interceptors",
  question: "What are the applications of HTTP interceptors?",
  answer: `<h3 id="what-are-the-applications-of-http-interceptors" class="question">What are the applications of HTTP interceptors?</h3>

  <p class="answer">The HTTP Interceptors can be used for different variety of tasks,</p>

  <ol class="answer">
      <li>Authentication</li>
      <li>Logging</li>
      <li>Caching</li>
      <li>Fake backend</li>
      <li>URL transformation</li>
      <li>Modifying headers</li>
  </ol>`
},
{
  slug: "is-multiple-interceptors-supported-in-angular",
  question: "Is multiple interceptors supported in Angular?",
  answer: `<h3 id="is-multiple-interceptors-supported-in-angular" class="question">Is multiple interceptors supported in Angular?</h3>

  <p class="answer">Yes, Angular supports multiple interceptors at a time. You could define multiple interceptors in providers property:</p>

  <pre><code class="language-javascript">
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyFirstInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MySecondInterceptor, multi: true }
  ],
  </code></pre>

  <p class="answer">The interceptors will be called in the order in which they were provided. i.e, MyFirstInterceptor will be called first in the above interceptors configuration.</p>`
},
{
  slug: "how-can-i-use-interceptor-for-an-entire-application",
  question: "How can I use interceptor for an entire application?",
  answer: `<h3 id="how-can-i-use-interceptor-for-an-entire-application" class="question">How can I use interceptor for an entire application?</h3>

  <p class="answer">You can use same instance of <code>HttpInterceptors</code> for the entire app by importing the <code>HttpClientModule</code> only in your AppModule, and add the interceptors to the root application injector.
  For example, let's define a class that is injectable in root application.</p>

  <pre><code class="language-javascript">
  @Injectable()
  export class MyInterceptor implements HttpInterceptor {
    intercept(
      req: HttpRequest&lt;any&gt;,
      next: HttpHandler
    ): Observable&lt;HttpEvent&lt;any&gt;&gt; {
      return next.handle(req).do((event) => {
        if (event instanceof HttpResponse) {
          // Code goes here
        }
      });
    }
  }
  </code></pre>

  <p class="answer">After that import HttpClientModule in AppModule</p>

  <pre><code class="language-javascript">
  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  </code></pre>`
},{
  slug: "what-is-rxjs",
  question: "What is RxJS?",
  answer: `<h3 id="what-is-rxjs" class="question">What is RxJS?</h3>

  <p class="answer">RxJS is a library for composing asynchronous and callback-based code in a functional, reactive style using Observables. Many APIs such as HttpClient produce and consume RxJS Observables and also use operators for processing observables.</p>

  <p class="answer">For example, you can import observables and operators for using HttpClient as below,</p>

  <pre><code class="language-javascript">
  import { Observable, throwError } from "rxjs";
  import { catchError, retry } from "rxjs/operators";
  </code></pre>`
},
{
  slug: "what-is-subscribing",
  question: "What is subscribing?",
  answer: `<h3 id="what-is-subscribing" class="question">What is subscribing?</h3>

  <p class="answer">An Observable instance begins publishing values only when someone subscribes to it. So you need to subscribe by calling the <code>subscribe()</code> method of the instance, passing an observer object to receive the notifications.</p>

  <p class="answer">Let's take an example of creating and subscribing to a simple observable, with an observer that logs the received message to the console.</p>

  <pre><code class="language-javascript">
  // Creates an observable sequence of 5 integers, starting from 1
  const source = range(1, 5);

  // Create observer object
  const myObserver = {
    next: (x) => console.log("Observer got a next value: " + x),
    error: (err) => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification"),
  };

  // Execute with the observer object and Prints out each item
  source.subscribe(myObserver);
  // => Observer got a next value: 1
  // => Observer got a next value: 2
  // => Observer got a next value: 3
  // => Observer got a next value: 4
  // => Observer got a next value: 5
  // => Observer got a complete notification
  </code></pre>`
},
{
  slug: "what-is-an-observable",
  question: "What is an observable?",
  answer: `<h3 id="what-is-an-observable" class="question">What is an observable?</h3>

  <p class="answer">An Observable is a unique Object similar to a Promise that can help manage async code. Observables are not part of the JavaScript language so we need to rely on a popular Observable library called RxJS.
  The observables are created using new keyword.</p>

  <p class="answer">Let see the simple example of observable,</p>

  <pre><code class="language-javascript">
  import { Observable } from "rxjs";

  const observable = new Observable((observer) => {
    setTimeout(() => {
      observer.next("Hello from a Observable!");
    }, 2000);
  });
  </code></pre>`
},
{
  slug: "what-is-an-observer",
  question: "What is an observer?",
  answer: `<h3 id="what-is-an-observer" class="question">What is an observer?</h3>

  <p class="answer">Observer is an interface for a consumer of push-based notifications delivered by an Observable. It has below structure,</p>

  <pre><code class="language-javascript">
  interface Observer&lt;T&gt; {
    closed?: boolean;
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
  }
  </code></pre>

  <p class="answer">A handler that implements the Observer interface for receiving observable notifications will be passed as a parameter for observable as below,</p>

  <pre><code class="language-javascript">
  myObservable.subscribe(myObserver);
  </code></pre>

  <p class="answer"><strong>Note:</strong> If you don't supply a handler for a notification type, the observer ignores notifications of that type.</p>`
},
{
  slug: "what-is-the-difference-between-promise-and-observable",
  question: "What is the difference between promise and observable?",
  answer: `<h3 id="what-is-the-difference-between-promise-and-observable" class="question">What is the difference between promise and observable?</h3>

  <p class="answer">Below are the list of differences between promise and observable:</p>

  <table class="table table-bordered">
      <tr>
          <th>Observable</th>
          <th>Promise</th>
      </tr>
      <tr>
          <td>Declarative: Computation does not start until subscription, so they can run whenever you need the result</td>
          <td>Executes immediately on creation</td>
      </tr>
      <tr>
          <td>Provides multiple values over time</td>
          <td>Provides only one</td>
      </tr>
      <tr>
          <td>Subscribe method is used for error handling that facilitates centralized and predictable error handling</td>
          <td>Push errors to the child promises</td>
      </tr>
      <tr>
          <td>Provides chaining and subscription to handle complex applications</td>
          <td>Uses only <code>.then()</code> clause</td>
      </tr>
  </table>`
},
{
  slug: "what-is-multicasting",
  question: "What is multicasting?",
  answer: `<h3 id="what-is-multicasting" class="question">What is multicasting?</h3>

  <p class="answer">Multi-casting is the practice of broadcasting to a list of multiple subscribers in a single execution.</p>

  <p class="answer">Let's demonstrate the multi-casting feature:</p>

  <pre><code class="language-javascript">
  var source = Rx.Observable.from([1, 2, 3]);
  var subject = new Rx.Subject();
  var multicasted = source.multicast(subject);

  // These are, under the hood, \`subject.subscribe({...})\`:
  multicasted.subscribe({
    next: (v) => console.log("observerA: " + v),
  });
  multicasted.subscribe({
    next: (v) => console.log("observerB: " + v),
  });
  </code></pre>`
},
{
  slug: "how-do-you-perform-error-handling-in-observables",
  question: "How do you perform error handling in observables?",
  answer: `<h3 id="how-do-you-perform-error-handling-in-observables" class="question">How do you perform error handling in observables?</h3>

  <p class="answer">You can handle errors by specifying an <strong>error callback</strong> on the observer instead of relying on <code>try</code>/<code>catch</code>, which are ineffective in asynchronous environment.</p>

  <p class="answer">For example, you can define error callback as below,</p>

  <pre><code class="language-javascript">
  myObservable.subscribe({
    next(num) {
      console.log("Next num: " + num);
    },
    error(err) {
      console.log("Received an errror: " + err);
    },
  });
  </code></pre>`
},
{
  slug: "what-is-the-shorthand-notation-for-subscribe-method",
  question: "What is the shorthand notation for subscribe method?",
  answer: `<h3 id="what-is-the-shorthand-notation-for-subscribe-method" class="question">What is the shorthand notation for subscribe method?</h3>

  <p class="answer">The <code>subscribe()</code> method can accept callback function definitions in line, for <code>next</code>, <code>error</code>, and <code>complete</code> handlers. It is known as shorthand notation or Subscribe method with positional arguments.</p>

  <p class="answer">For example, you can define subscribe method as below,</p>

  <pre><code class="language-javascript">
  myObservable.subscribe(
    (x) => console.log("Observer got a next value: " + x),
    (err) => console.error("Observer got an error: " + err),
    () => console.log("Observer got a complete notification")
  );
  </code></pre>`
},
{
  slug: "what-are-the-utility-functions-provided-by-rxjs",
  question: "What are the utility functions provided by RxJS?",
  answer: `<h3 id="what-are-the-utility-functions-provided-by-rxjs" class="question">What are the utility functions provided by RxJS?</h3>

  <p class="answer">The RxJS library also provides below utility functions for creating and working with observables.</p>

  <ol class="answer">
      <li>Converting existing code for async operations into observables</li>
      <li>Iterating through the values in a stream</li>
      <li>Mapping values to different types</li>
      <li>Filtering streams</li>
      <li>Composing multiple streams</li>
  </ol>`
},
{
  slug: "what-are-observable-creation-functions",
  question: "What are observable creation functions?",
  answer: `<h3 id="what-are-observable-creation-functions" class="question">What are observable creation functions?</h3>

  <p class="answer">RxJS provides creation functions for the process of creating observables from promises, events, timers and Ajax requests. Let us explain each of them with an example:</p>

  <ol class="answer">
  <li><strong>Create an observable from a promise</strong>
      <pre><code class="language-javascript">
      import { from } from "rxjs"; // from function
      const data = from(fetch("/api/endpoint")); //Created from Promise
      data.subscribe({
        next(response) {
          console.log(response);
        },
        error(err) {
          console.error("Error: " + err);
        },
        complete() {
          console.log("Completed");
        },
      });
      </code></pre>
  </li>
  <li><strong>Create an observable that creates an AJAX request</strong>
      <pre><code class="language-javascript">
      import { ajax } from "rxjs/ajax"; // ajax function
      const apiData = ajax("/api/data"); // Created from AJAX request
      // Subscribe to create the request
      apiData.subscribe((res) => console.log(res.status, res.response));
      </code></pre>
  </li>
  <li><strong>Create an observable from a counter</strong>
      <pre><code class="language-javascript">
      import { interval } from "rxjs"; // interval function
      const secondsCounter = interval(1000); // Created from Counter value
      secondsCounter.subscribe((n) => console.log(\`Counter value: \${n}\`));
      </code></pre>
  </li>
  <li><strong>Create an observable from an event</strong>
      <pre><code class="language-javascript">
      import { fromEvent } from "rxjs";
      const el = document.getElementById("custom-element");
      const mouseMoves = fromEvent(el, "mousemove");
      const subscription = mouseMoves.subscribe((e: MouseEvent) => {
        console.log(
          \`Coordnitaes of mouse pointer: \${e.clientX} * \${e.clientY}\`
        );
      });
      </code></pre>
  </li>
  </ol>`
},{
  "slug": "what-will-happen-if-you-do-not-supply-handler-for-the-observer",
  "question": "What will happen if you do not supply handler for the observer?",
  "answer": "<h3 id=\"what-will-happen-if-you-do-not-supply-handler-for-the-observer\" class=\"question\">What will happen if you do not supply handler for the observer?</h3>\n\n<p class=\"answer\">Usually, an observer object can define any combination of <code>next</code>, <code>error</code>, and <code>complete</code> notification type handlers. If you don't supply a handler for a notification type, the observer just ignores notifications of that type.</p>"
},{
  "slug": "what-are-reactive-forms",
  "question": "What are reactive forms?",
  "answer": `<h3 id="what-are-reactive-forms">What are reactive forms?</h3>
  <p>  Reactive forms is a model-driven approach for creating forms in a reactive style(form inputs changes over time). These are built around observable streams, where form inputs and values are provided as streams of input values. Let&#39;s follow the below steps to create reactive forms,</p>
  <ol>
  <li><p>Register the reactive forms module which declares reactive-form directives in your app</p>
  <pre><code class="language-js">
  import { ReactiveFormsModule } from &quot;@angular/forms&quot;;
  
  @NgModule({
    imports: [
      // other imports ...
      ReactiveFormsModule,
    ],
  })
  export class AppModule {}
  </code></pre>
  </li>
  <li><p>Create a new FormControl instance and save it in the component.</p>
  <pre><code class="language-js">
  import { Component } from &quot;@angular/core&quot;;
  import { FormControl } from &quot;@angular/forms&quot;;
  
  @Component({
    selector: &quot;user-profile&quot;,
    styleUrls: [&quot;./user-profile.component.css&quot;],
  })
  export class UserProfileComponent {
    userName = new FormControl(&quot;&quot;);
  }
  </code></pre>
  </li>
  <li><p>Register the FormControl in the template.</p>
  <pre><code class="language-js">   
    &lt;label&gt;
      User name:
      &lt;input type=&quot;text&quot; [formControl]=&quot;userName&quot;&gt;
    &lt;/label&gt;
  </code></pre>
  <p>Finally, the component with reactive form control appears as below,</p>
  </li>
  </ol>
  <pre><code class="language-js">
  import { Component } from &quot;@angular/core&quot;;
  import { FormControl } from &quot;@angular/forms&quot;;
  
  @Component({
    selector: &quot;user-profile&quot;,
    styleUrls: [&quot;./user-profile.component.css&quot;],
    template: '
      &lt;label&gt;
        User name:
        &lt;input type=&quot;text&quot; [formControl]=&quot;userName&quot; /&gt;
      &lt;/label&gt;
    ',
  })
  export class UserProfileComponent {
    userName = new FormControl(&quot;&quot;);
  }
  </code></pre>
  `
},{
  slug: "what-are-dynamic-forms",
  question: "What are dynamic forms?",
  answer: `<h3 id="what-are-dynamic-forms">What are dynamic forms?</h3>
  <p>Dynamic forms is a pattern in which we build a form dynamically based on metadata that describes a business object model. You can create them based on reactive form API.</p>
  `
},{
  slug: "what-are-template-driven-forms",
  question: "What are template driven forms?",
  answer: `<h3 id="what-are-template-driven-forms">What are template driven forms?</h3>
<p>Template driven forms are model-driven forms where you write the logic, validations, controls etc, in the template part of the code using directives. They are suitable for simple scenarios and use two-way binding with [(ngModel)] syntax.</p>
<p>For example, you can create a register form easily by following the below simple steps:</p>
<ol>
  <li>Import the FormsModule into the Application module's imports array</li>
</ol>
<pre><code class="language-typescript">
  import { BrowserModule } from "@angular/platform-browser";
  import { NgModule } from "@angular/core";
  import { FormsModule } from "@angular/forms";
  import { RegisterComponent } from "./app.component";
  @NgModule({
    declarations: [RegisterComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [RegisterComponent],
  })
  export class AppModule {}

</code></pre>
<ol start="2">
  <li>Bind the form from template to the component using ngModel syntax</li>
</ol>
<pre><code class="language-typescript">
  &lt;input
    type="text"
    class="form-control"
    id="name"
    required
    [(ngModel)]="model.name"
    name="name"
  /&gt;

</code></pre>
<ol start="3">
  <li>Attach NgForm directive to the &lt;form&gt; tag in order to create FormControl instances and register them</li>
</ol>
<pre><code class="language-typescript">
  &lt;form #registerForm="ngForm"&gt;

</code></pre>
<ol start="4">
  <li>Apply the validation message for form controls</li>
</ol>
<pre><code class="language-typescript">
  &lt;label for="name"&gt;Name&lt;/label&gt;
  &lt;input
    type="text"
    class="form-control"
    id="name"
    required
    [(ngModel)]="model.name"
    name="name"
    #name="ngModel"
  /&gt;
  &lt;div [hidden]="name.valid || name.pristine" class="alert alert-danger"&gt;
    Please enter your name
  &lt;/div&gt;

</code></pre>
<ol start="5">
  <li>Let's submit the form with ngSubmit directive and add type="submit" button at the bottom of the form to trigger form submit.</li>
</ol>
<pre><code class="language-typescript">
  &lt;form (ngSubmit)="onSubmit()" #heroForm="ngForm"&gt;
    // Form goes here
    &lt;button type="submit" class="btn btn-success" [disabled]="!registerForm.form.valid"&gt;Submit&lt;/button&gt;
  &lt;/form&gt;

</code></pre>
<p>Finally, the completed template-driven registration form will appear as follows:</p>
<pre><code class="language-typescript">
  &lt;div class="container"&gt;
    &lt;h1&gt;Registration Form&lt;/h1&gt;
    &lt;form (ngSubmit)="onSubmit()" #registerForm="ngForm"&gt;
      &lt;div class="form-group"&gt;
        &lt;label for="name"&gt;Name&lt;/label&gt;
        &lt;input
          type="text"
          class="form-control"
          id="name"
          required
          [(ngModel)]="model.name"
          name="name"
          #name="ngModel"
        /&gt;
        &lt;div
          [hidden]="name.valid || name.pristine"
          class="alert alert-danger"
        &gt;
          Please enter your name
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;button
        type="submit"
        class="btn btn-success"
        [disabled]="!registerForm.form.valid"
      &gt;
        Submit
      &lt;/button&gt;
    &lt;/form&gt;
  &lt;/div&gt;

</code></pre>`
},{
  slug: "what-are-differences-between-reactive-and-template-driven-forms",
  question: "What are the differences between reactive forms and template driven forms?",
  answer: `<h3 id="what-are-differences-between-reactive-and-template-driven-forms">What are the differences between reactive forms and template driven forms?</h3>
  <p>Below are the main differences between reactive forms and template driven forms:</p>
  <table class='table table-bordered'>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Reactive</th>
        <th>Template-Driven</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Form model setup</td>
        <td>Created (FormControl instance) in component explicitly</td>
        <td>Created by directives</td>
      </tr>
      <tr>
        <td>Data updates</td>
        <td>Synchronous</td>
        <td>Asynchronous</td>
      </tr>
      <tr>
        <td>Form custom validation</td>
        <td>Defined as Functions</td>
        <td>Defined as Directives</td>
      </tr>
      <tr>
        <td>Testing</td>
        <td>No interaction with change detection cycle</td>
        <td>Need knowledge of the change detection process</td>
      </tr>
      <tr>
        <td>Mutability</td>
        <td>Immutable (by always returning a new value for FormControl instance)</td>
        <td>Mutable (Property always modified to a new value)</td>
      </tr>
      <tr>
        <td>Scalability</td>
        <td>More scalable using low-level APIs</td>
        <td>Less scalable due to abstraction on APIs</td>
      </tr>
    </tbody>
  </table>
  `
},{
  slug: "what-are-different-ways-to-group-form-controls",
  question: "What are the different ways to group form controls?",
  answer: `
  <h3 id="what-are-different-ways-to-group-form-controls">What are the different ways to group form controls?</h3>
  <p>Reactive forms provide two ways of grouping multiple related controls:</p>
  <ol>
    <li><strong>FormGroup:</strong> It defines a form with a fixed set of controls those can be managed together in an one object. It has same properties and methods similar to a FormControl instance.</li>
  </ol>
  <p>This FormGroup can be nested to create complex forms as below:</p>
  <pre><code class="language-typescript">
  import { Component } from "@angular/core";
  import { FormGroup, FormControl } from "@angular/forms";

  @Component({
    selector: "user-profile",
    templateUrl: "./user-profile.component.html",
    styleUrls: ["./user-profile.component.css"],
  })
  export class UserProfileComponent {
    userProfile = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      address: new FormGroup({
        street: new FormControl(""),
        city: new FormControl(""),
        state: new FormControl(""),
        zip: new FormControl(""),
      }),
    });

    onSubmit() {
      // Store this.userProfile.value in DB
    }
  }
</code></pre>
  <ol start="2">
    <li><strong>FormArray:</strong> It defines a dynamic form in an array format, where you can add and remove controls at run time. This is useful for dynamic forms when you don’t know how many controls will be present within the group.</li>
  </ol>
  <pre><code class="language-typescript">
  import { Component } from "@angular/core";
  import { FormArray, FormControl } from "@angular/forms";

  @Component({
    selector: "order-form",
    templateUrl: "./order-form.component.html",
    styleUrls: ["./order-form.component.css"],
  })
  export class OrderFormComponent {
    constructor() {
      this.orderForm = new FormGroup({
        firstName: new FormControl("John", Validators.minLength(3)),
        lastName: new FormControl("Rodson"),
        items: new FormArray([new FormControl(null)]),
      });
    }

    onSubmitForm() {
      // Save the items this.orderForm.value in DB
    }

    onAddItem() {
      this.orderForm.controls.items.push(new FormControl(null));
    }

    onRemoveItem(index) {
      this.orderForm.controls["items"].removeAt(index);
    }
  }
</code></pre>
  `
},{
  slug: "how-do-you-update-specific-properties-of-a-form-model",
  question: "How do you update specific properties of a form model?",
  answer: `
  <h3 id="how-do-you-update-specific-properties-of-a-form-model">How do you update specific properties of a form model?</h3>
  <p>You can use <code>patchValue()</code> method to update specific properties defined in the form model. For example, you can update the name and street of a certain profile on click of the update button as shown below:</p>
  <pre><code class="language-javascript">
  updateProfile() {
    this.userProfile.patchValue({
      firstName: 'John',
      address: {
        street: '98 Crescent Street'
      }
    });
  }

</code></pre>
  <p>You can also use <code>setValue</code> method to update properties.</p>
  <p><strong>Note:</strong> Remember to update the properties against the exact model structure.</p>
  <button onclick="updateProfile()">Update Profile</button>
  `
},{
  slug: "what-is-the-purpose-of-formbuilder",
  question: "What is the purpose of FormBuilder?",
  answer: `
  <h3 id="what-is-the-purpose-of-formbuilder">What is the purpose of FormBuilder?</h3>
  <p>FormBuilder is used as syntactic sugar for easily creating instances of a FormControl, FormGroup, or FormArray. This is helpful to reduce the amount of boilerplate needed to build complex reactive forms. It is available as an injectable helper class of the <code>@angular/forms</code> package.</p>
  <p>For example, the user profile component creation becomes easier as shown here:</p>
  <pre><code class="language-javascript">
  export class UserProfileComponent {
  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  constructor(private formBuilder: FormBuilder) { }
 }

</code></pre>
  `
},{
  slug: "how-do-you-verify-the-model-changes-in-forms",
  question: "How do you verify the model changes in forms?",
  answer: `
  <h3 id="how-do-you-verify-the-model-changes-in-forms">How do you verify the model changes in forms?</h3>
  <p>You can add a getter property (let's say, <code>diagnostic</code>) inside the component to return a JSON representation of the model during development. This is useful to verify whether the values are really flowing from the input box to the model and vice versa or not.</p>
  <pre><code class="language-javascript">
  export class UserProfileComponent {
  model = new User("John", 29, "Writer");

  // TODO: Remove after the verification
  get diagnostic() {
    return JSON.stringify(this.model);
  }
 }

</code></pre>
<p>And add <code>diagnostic</code> binding near the top of the form:</p>
<pre><code class="language-html">
  {{diagnostic}}
  &lt;div class="form-group"&gt;// FormControls goes here&lt;/div&gt;

</code></pre>
  `
},{
  slug: "what-are-the-state-css-classes-provided-by-ngmodel",
  question: "What are the state CSS classes provided by ngModel?",
  answer: `
  <h3 id="what-are-the-state-css-classes-provided-by-ngmodel">What are the state CSS classes provided by ngModel?</h3>
  <p>The ngModel directive updates the form control with special Angular CSS classes to reflect its state. Here's a list of classes in a tabular format:</p>
  <table class='table table-bordered'>
    <thead>
      <tr>
        <th>Form control state</th>
        <th>If true</th>
        <th>If false</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Visited</td>
        <td>ng-touched</td>
        <td>ng-untouched</td>
      </tr>
      <tr>
        <td>Value has changed</td>
        <td>ng-dirty</td>
        <td>ng-pristine</td>
      </tr>
      <tr>
        <td>Value is valid</td>
        <td>ng-valid</td>
        <td>ng-invalid</td>
      </tr>
    </tbody>
  </table>
  `
},{
  slug: "how-do-you-reset-the-form",
  question: "How do you reset the form?",
  answer: `
  <h3 id="how-do-you-reset-the-form">How do you reset the form?</h3>
  <p>In a model-driven form, you can reset the form just by calling the function <code>reset()</code> on our form model. For example, you can reset the form model on submission as follows:</p>
  <pre><code class="language-javascript">
  onSubmit() {
  if (this.myform.valid) {
    console.log("Form is submitted");
    // Perform business logic here
    this.myform.reset();
  }
 }

</code></pre>
  <p>Now, your form model resets the form back to its original pristine state.</p>
  `
},
{
  slug: "what-are-the-types-of-validator-functions",
  question: "What are the types of validator functions?",
  answer: `
  <h3 id="what-are-the-types-of-validator-functions">What are the types of validator functions?</h3>
  <p>In reactive forms, the validators can be either synchronous or asynchronous functions:</p>
  <ol>
    <li><strong>Sync validators:</strong> These are the synchronous functions which take a control instance and immediately return either a set of validation errors or null. Also, these functions passed as second argument while instantiating the form control. The main use cases are simple checks like whether a field is empty, whether it exceeds a maximum length etc.</li>
    <li><strong>Async validators:</strong> These are the asynchronous functions which take a control instance and return a Promise or Observable that later emits a set of validation errors or null. Also, these functions passed as second argument while instantiating the form control. The main use cases are complex validations like hitting a server to check the availability of a username or email.</li>
  </ol>
  <p>The representation of these validators looks like below:</p>
  <pre><code class="language-javascript">
  this.myForm = formBuilder.group({
    firstName: ['value'],
    lastName: ['value', *Some Sync validation function*],
    email: ['value', *Some validation function*, *Some asynchronous validation function*]
  });

</code></pre>
  `
},
{
  slug: "can-you-give-an-example-of-built-in-validators",
  question: "Can you give an example of built-in validators?",
  answer: `
  <h3 id="can-you-give-an-example-of-built-in-validators">Can you give an example of built-in validators?</h3>
  <p>In reactive forms, you can use built-in validators like <code>required</code> and <code>minlength</code> on your input form controls. For example, the registration form can have these validators on the name input field:</p>
  <pre><code class="language-javascript">
  this.registrationForm = new FormGroup({
  name: new FormControl(this.hero.name, [
    Validators.required,
    Validators.minLength(4),
  ]),
 });

</code></pre>
  <p>Whereas in template-driven forms, both <code>required</code> and <code>minlength</code> validators are available as attributes.</p>
  `
},
{
  slug: "how-do-you-optimize-the-performance-of-async-validators",
  question: "How do you optimize the performance of async validators?",
  answer: `
  <h3 id="how-do-you-optimize-the-performance-of-async-validators">How do you optimize the performance of async validators?</h3>
  <p>Since all validators run after every form value change, it creates a major impact on performance with async validators by hitting the external API on each keystroke. This situation can be avoided by delaying the form validity by changing the <code>updateOn</code> property from <code>change</code> (default) to <code>submit</code> or <code>blur</code>. The usage would be different based on form types:</p>
  <ol>
    <li><strong>Template-driven forms:</strong> Set the property on <code>ngModelOptions</code> directive</li>
  </ol>
  <pre><code class="language-html">
   &lt;input [(ngModel)]="name" [ngModelOptions]="{updateOn: 'blur'}" /&gt;

</code></pre>
  <ol start="2">
    <li><strong>Reactive-forms:</strong> Set the property on FormControl instance</li>
  </ol>
  <pre><code class="language-javascript">
  name = new FormControl("", { updateOn: "blur" });

</code></pre>
  `
},{
  slug: "what-is-angular-animation",
  question: "What is angular animation?",
  answer: `
  <h3 id="what-is-angular-animation">What is angular animation?</h3>
  <p>Angular's animation system is built on CSS functionality in order to animate any property that the browser considers animatable. These properties include positions, sizes, transforms, colors, borders etc. The Angular modules for animations are <strong>@angular/animations</strong> and <strong>@angular/platform-browser</strong> and these dependencies are automatically added to your project when you create a project using Angular CLI.</p>
  `
},{
  slug: "what-are-the-steps-to-use-animation-module",
  question: "What are the steps to use animation module?",
  answer: `<h3 id="what-are-the-steps-to-use-animation-module">What are the steps to use animation module?</h3>
  <p>You need to follow below steps to implement animation in your angular project,</p>
  <ol>
  <li><p><strong>Enabling the animations module:</strong> Import BrowserAnimationsModule to add animation capabilities into your Angular root application module(for example, src/app/app.module.ts).</p>
  <pre><code class="language-javascript">
  import { NgModule } from &quot;@angular/core&quot;;
  import { BrowserModule } from &quot;@angular/platform-browser&quot;;
  import { BrowserAnimationsModule } from &quot;@angular/platform-browser/animations&quot;;
  
  @NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [],
    bootstrap: [],
  })
  export class AppModule {}
  </code></pre>
  </li>
  <li><p><strong>Importing animation functions into component files:</strong> Import required animation functions from @angular/animations in component files(for example, src/app/app.component.ts).</p>
  <pre><code class="language-javascript">
  import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from &quot;@angular/animations&quot;;
  </code></pre>
  </li>
  <li><p><strong>Adding the animation metadata property:</strong> add a metadata property called animations: within the @Component() decorator in component files(for example, src/app/app.component.ts)</p>
  <pre><code class="language-javascript">
  @Component({
    selector: &#39;app-root&#39;,
    templateUrl: &#39;app.component.html&#39;,
    styleUrls: [&#39;app.component.css&#39;],
    animations: [
      // animation triggers go here
    ]
  })
  </code></pre>
  </li>
  </ol>
  `
},{
  slug: "what-is-state-function",
  question: "What is State function?",
  answer: `
  <h3 id="what-is-state-function">What is State function?</h3>
  <p>Angular's <code>state()</code> function is used to define different states to call at the end of each transition. This function takes two arguments: a unique name like open or closed and a <code>style()</code> function.</p>
  <p>For example, you can write an open state function:</p>
  <pre><code class="language-javascript">
    state('open', style({
      height: '300px',
      opacity: 0.5,
      backgroundColor: 'blue'
    })),
  </code></pre>
  `
},{
  slug: "what-is-style-function",
  question: "What is Style function?",
  answer: `
  <h3 id="what-is-style-function">What is Style function?</h3>
  <p>The <code>style</code> function is used to define a set of styles to associate with a given state name. You need to use it along with <code>state()</code> function to set CSS style attributes. For example, in the close state, the button has a height of 100 pixels, an opacity of 0.8, and a background color of green.</p>
  <pre><code class="language-javascript">
  state('close', style({
    height: '100px',
    opacity: 0.8,
    backgroundColor: 'green'
  })),
  </code></pre>
  <p><strong>Note:</strong> The style attributes must be in camelCase.</p>
  `,
},
{
  slug: "what-is-the-purpose-of-animate-function",
  question: "What is the purpose of animate function?",
  answer: `
  <h3 id="what-is-the-purpose-of-animate-function">What is the purpose of animate function?</h3>
  <p>Angular Animations are a powerful way to implement sophisticated and compelling animations for your Angular single page web application.</p>
  <pre><code class="language-javascript">
  import { Component, OnInit, Input } from "@angular/core";
  import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from "@angular/animations";

  @Component({
    selector: "app-animate",
    templateUrl: \`<div [@changeState]="currentState" class="myblock mx-auto"></div>\`,
    styleUrls: \`.myblock {
      background-color: green;
      width: 300px;
      height: 250px;
      border-radius: 5px;
      margin: 5rem;
      }\`,
    animations: [
      trigger("changeState", [
        state(
          "state1",
          style({
            backgroundColor: "green",
            transform: "scale(1)",
          })
        ),
        state(
          "state2",
          style({
            backgroundColor: "red",
            transform: "scale(1.5)",
          })
        ),
        transition("*=>state1", animate("300ms")),
        transition("*=>state2", animate("2000ms")),
      ]),
    ],
  })
  export class AnimateComponent implements OnInit {
    @Input() currentState;

    constructor() {}

    ngOnInit() {}
  }
  </code></pre>
  `,
},
{
  slug: "what-is-transition-function",
  question: "What is transition function?",
  answer: `
  <h3 id="what-is-transition-function">What is transition function?</h3>
  <p>The animation transition function is used to specify the changes that occur between one state and another over a period of time. It accepts two arguments: the first argument accepts an expression that defines the direction between two transition states, and the second argument accepts an <code>animate()</code> function.</p>
  <p>Let's take an example state transition from open to closed with a half-second transition between states.</p>
  <pre><code class="language-javascript">
  transition('open => closed', [
    animate('500ms')
  ]),
  </code></pre>
  `,
},{
  slug: "how-do-you-trigger-an-animation",
  question: "How do you trigger an animation?",
  answer: `
  <h3 id="how-do-you-trigger-an-animation">How do you trigger an animation?</h3>
  <p>Angular provides a <code>trigger()</code> function for animation in order to collect the states and transitions with a specific animation name, so that you can attach it to the triggering element in the HTML template. This function watches for changes and triggers initiates the actions when a change occurs.</p>
  <p>For example, let's create a trigger named <code>upDown</code>, and attach it to the button element.</p>
  <pre><code class="language-javascript">@Component({
    selector: 'app-up-down',
    animations: [
      trigger('upDown', [
        state('up', style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })),
        state('down', style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'green'
        })),
        transition('up =&gt; down', [
          animate('1s')
        ]),
        transition('down =&gt; up', [
          animate('0.5s')
        ]),
      ]),
    ],
    templateUrl: 'up-down.component.html',
    styleUrls: ['up-down.component.css']
  })
  export class UpDownComponent {
    isUp = true;

    toggle() {
      this.isUp = !this.isUp;
    }
  }
  </code></pre>
  `
},{
  slug: "what-are-the-security-principles-in-angular",
  question: "What are the security principles in angular?",
  answer: `
  <h3 id="what-are-the-security-principles-in-angular">What are the security principles in angular?</h3>
  <p>Below are the list of security principles in angular,</p>
  <ol>
    <li>You should avoid direct use of the DOM APIs.</li>
    <li>You should enable Content Security Policy (CSP) and configure your web server to return appropriate CSP HTTP headers.</li>
    <li>You should Use the offline template compiler.</li>
    <li>You should Use Server Side XSS protection.</li>
    <li>You should Use DOM Sanitizer.</li>
    <li>You should Preventing CSRF or XSRF attacks.</li>
  </ol>
  `
},
{
  slug: "what-are-the-best-practices-for-security-in-angular",
  question: "What are the best practices for security in angular?",
  answer: `
  <h3 id="what-are-the-best-practices-for-security-in-angular">What are the best practices for security in angular?</h3>
  <p>Below are the best practices of security in angular,</p>
  <ol>
    <li>Use the latest Angular library releases</li>
    <li>Don't modify your copy of Angular</li>
    <li>Avoid Angular APIs marked in the documentation as “Security Risk.”</li>
  </ol>
  `
},
{
  slug: "what-is-angular-security-model-for-preventing-xss-attacks",
  question: "What is Angular security model for preventing XSS attacks?",
  answer: `
  <h3 id="what-is-angular-security-model-for-preventing-xss-attacks">What is Angular security model for preventing XSS attacks?</h3>
  <p>Angular treats all values as untrusted by default. i.e, Angular sanitizes and escapes untrusted values When a value is inserted into the DOM from a template, via property, attribute, style, class binding, or interpolation.</p>
  `
},
{
  slug: "what-is-the-role-of-template-compiler-for-prevention-of-xss-attacks",
  question: "What is the role of template compiler for prevention of XSS attacks?",
  answer: `
  <h3 id="what-is-the-role-of-template-compiler-for-prevention-of-xss-attacks">What is the role of template compiler for prevention of XSS attacks?</h3>
  <p>The offline template compiler prevents vulnerabilities caused by template injection, and greatly improves application performance. So it is recommended to use offline template compiler in production deployments without dynamically generating any template.</p>
  `
},
{
  slug: "what-are-the-various-security-contexts-in-angular",
  question: "What are the various security contexts in Angular?",
  answer: `
  <h3 id="what-are-the-various-security-contexts-in-angular">What are the various security contexts in Angular?</h3>
  <p>Angular defines the following security contexts for sanitization,</p>
  <ol>
    <li><strong>HTML:</strong> It is used when interpreting a value as HTML such as binding to innerHtml.</li>
    <li><strong>Style:</strong> It is used when binding CSS into the style property.</li>
    <li><strong>URL:</strong> It is used for URL properties such as <code>&lt;a href&gt;</code>.</li>
    <li><strong>Resource URL:</strong> It is a URL that will be loaded and executed as code such as <code>&lt;script src&gt;</code>.</li>
  </ol>
  `
},
{
  slug: "what-is-sanitization-is-angular-supports-it",
  question: "What is Sanitization? Is angular supports it?",
  answer: `
  <h3 id="what-is-sanitization-is-angular-supports-it">What is Sanitization? Is angular supports it?</h3>
  <p><strong>Sanitization</strong> is the inspection of an untrusted value, turning it into a value that's safe to insert into the DOM. Yes, Angular suppports sanitization. It sanitizes untrusted values for HTML, styles, and URLs but sanitizing resource URLs isn't possible because they contain arbitrary code.</p>
  `
},
{
  slug: "what-is-the-purpose-of-innerhtml",
  question: "What is the purpose of innerHTML?",
  answer: `
  <h3 id="what-is-the-purpose-of-innerhtml">What is the purpose of innerHTML?</h3>
  <p>The innerHtml is a property of HTML-Elements, which allows you to set it's html-content programmatically. Let's display the below html code snippet in a <code>&lt;div&gt;</code> tag as below using innerHTML binding,</p>
  <pre><code class="language-html">
   &lt;div [innerHTML]="htmlSnippet"&gt;&lt;/div&gt;
  </code></pre>
  <p>and define the htmlSnippet property from any component</p>
  <pre><code class="language-javascript">
  export class myComponent {
    htmlSnippet: string = "&lt;b&gt;Hello World&lt;/b&gt;, Angular";
  }
  </code></pre>
  <p>Unfortunately this property could cause Cross Site Scripting (XSS) security bugs when improperly handled.</p>
  `
},
{
  slug: "what-is-the-difference-between-interpolated-content-and-innerhtml",
  question: "What is the difference between interpolated content and innerHTML?",
  answer: `
  <h3 id="what-is-the-difference-between-interpolated-content-and-innerhtml">What is the difference between interpolated content and innerHTML?</h3>
  <p>The main difference between interpolated and innerHTML code is the behavior of code interpreted. Interpolated content is always escaped i.e, HTML isn't interpreted and the browser displays angle brackets in the element's text content. Where as in innerHTML binding, the content is interpreted i.e, the browser will convert &lt; and &gt; characters as HTMLEntities. For example, the usage in template would be as below,</p>
  <pre><code class="language-html">
  &lt;p&gt;Interpolated value:&lt;/p&gt;
  &lt;div&gt;{{htmlSnippet}}&lt;/div&gt;
  &lt;p&gt;Binding of innerHTML:&lt;/p&gt;
  &lt;div [innerHTML]="htmlSnippet"&gt;&lt;/div&gt;

  </code></pre>
  <p>and the property defined in a component.</p>
  <pre><code class="language-javascript">
  export class InnerHtmlBindingComponent {
  htmlSnippet =
    'Template &lt;script&gt;alert("XSS Attack")&lt;/script&gt; &lt;b&gt;Code attached&lt;/b&gt;';
 }
  </code></pre>
  <p>Even though innerHTML binding create a chance of XSS attack, Angular recognizes the value as unsafe and automatically sanitizes it.</p>
  `
},
{
  slug: "how-do-you-prevent-automatic-sanitization",
  question: "How do you prevent automatic sanitization?",
  answer: `
  <h3 id="how-do-you-prevent-automatic-sanitization">How do you prevent automatic sanitization?</h3>
  <p>Sometimes the applications genuinely need to include executable code such as displaying <code>&lt;iframe&gt;</code> from an URL. In this case, you need to prevent automatic sanitization in Angular by saying that you inspected a value, checked how it was generated, and made sure it will always be secure. Basically it involves 2 steps,</p>
  <ol>
    <li>Inject DomSanitizer: You can inject DomSanitizer in component as parameter in constructor</li>
    <li>Mark the trusted value by calling some of the below methods</li>
    <ol>
      <li>bypassSecurityTrustHtml</li>
      <li>bypassSecurityTrustScript</li>
      <li>bypassSecurityTrustStyle</li>
      <li>bypassSecurityTrustUrl</li>
      <li>bypassSecurityTrustResourceUrl</li>
    </ol>
  </ol>
  <p>For example,The usage of dangerous url to trusted url would be as below,</p>
  <pre><code class="language-javascript">
  constructor(private sanitizer: DomSanitizer) {
  this.dangerousUrl = 'javascript:alert("XSS attack")';
  this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

</code></pre>
  `
},
{
  slug: "is-safe-to-use-direct-dom-api-methods-in-terms-of-security",
  question: "Is safe to use direct DOM API methods in terms of security?",
  answer: `
  <h3 id="is-safe-to-use-direct-dom-api-methods-in-terms-of-security">Is safe to use direct DOM API methods in terms of security?</h3>
  <p>No,the built-in browser DOM APIs or methods don't automatically protect you from security vulnerabilities. In this case it is recommended to use Angular templates instead of directly interacting with DOM. If it is unavoidable then use the built-in Angular sanitization functions.</p>
  `
},
{
  slug: "what-is-dom-sanitizer",
  question: "What is DOM sanitizer?",
  answer: `
  <h3 id="what-is-dom-sanitizer">What is DOM sanitizer?</h3>
  <p><code>DomSanitizer</code> is used to help preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts.</p>
  `
},
{
  slug: "how-do-you-support-server-side-xss-protection-in-angular-application",
  question: "How do you support server side XSS protection in Angular application?",
  answer: `
  <h3 id="how-do-you-support-server-side-xss-protection-in-angular-application">How do you support server side XSS protection in Angular application?</h3>
  <p>The server-side XSS protection is supported in an angular application by using a templating language that automatically escapes values to prevent XSS vulnerabilities on the server. But don't use a templating language to generate Angular templates on the server side which creates a high risk of introducing template-injection vulnerabilities.</p>
  `
},
{
  slug: "is-angular-prevents-http-level-vulnerabilities",
  question: "Is angular prevents http level vulnerabilities?",
  answer: `
  <h3 id="is-angular-prevents-http-level-vulnerabilities">Is angular prevents http level vulnerabilities?</h3>
  <p>Angular has built-in support for preventing http level vulnerabilities such as as cross-site request forgery (CSRF or XSRF) and cross-site script inclusion (XSSI). Even though these vulnerabilities need to be mitigated on server-side, Angular provides helpers to make the integration easier on the client side.</p>
  <ol>
    <li>HttpClient supports a token mechanism used to prevent XSRF attacks</li>
    <li>HttpClient library recognizes the convention of prefixed JSON responses(which non-executable js code with ")]}',\\n" characters) and automatically strips the string ")]}',\\n" from all responses before further parsing</li>
  </ol>
  `
},{
  slug: "what-happens-if-you-use-script-tag-inside-template",
  question: "What happens if you use script tag inside template?",
  answer: `<h3 id="what-happens-if-you-use-script-tag-inside-template">What happens if you use script tag inside template?</h3>
  <p>Angular recognizes the value as unsafe and automatically sanitizes it, which removes the <code>script</code> tag but keeps safe content such as the text content of the <code>script</code> tag. This way it eliminates the risk of script injection attacks. If you still use it then it will be ignored and a warning appears in the browser console.</p>
  <p>Let&#39;s take an example of innerHtml property binding which causes XSS vulnerability,</p>
  <pre><code class="language-typescript">
  export class InnerHtmlBindingComponent {
    // For example, a user/attacker-controlled value from a URL.
    htmlSnippet = &#39;Template &lt;script&gt;alert(&quot;0wned&quot;)&lt;/script&gt; &lt;b&gt;Syntax&lt;/b&gt;&#39;;
  }
  </code></pre>
  `
},{
  slug: "what-is-angular-cli",
  question: "What is angular CLI?",
  answer: "<h3 id=\"what-is-angular-cli\">What is angular CLI?</h3>\n<p>Angular CLI(<strong>Command Line Interface</strong>) is a command line interface to scaffold and build angular apps using nodejs style (commonJs) modules.\nYou need to install using below npm command,</p>\n<pre><code>npm install @angular/cli@latest\n</code></pre>\n<p>Below are the list of few commands, which will come handy while creating angular projects</p>\n<ol>\n<li><p><strong>Creating New Project:</strong> ng new &lt;project-name&gt;</p></li>\n<li><p><strong>Generating Components, Directives &amp; Services:</strong> ng generate/g &lt;feature-name&gt;\nThe different types of commands would be,</p>\n<ul>\n<li>ng generate class my-new-class: add a class to your application</li>\n<li>ng generate component my-new-component: add a component to your application</li>\n<li>ng generate directive my-new-directive: add a directive to your application</li>\n<li>ng generate enum my-new-enum: add an enum to your application</li>\n<li>ng generate module my-new-module: add a module to your application</li>\n<li>ng generate pipe my-new-pipe: add a pipe to your application</li>\n<li>ng generate service my-new-service: add a service to your application</li>\n</ul>\n</li>\n<li><p><strong>Running the Project:</strong> ng serve</p></li>\n</ol>"
},{
  slug: "what-are-angular-elements",
  question: "What are Angular elements?",
  answer: "<h3 id=\"what-are-angular-elements\">What are Angular elements?</h3>\n<p>Angular elements are Angular components packaged as <strong>custom elements</strong> (a web standard for defining new HTML elements in a framework-agnostic way). Angular Elements host an Angular component, providing a bridge between the data and the logic defined in the component and the standard DOM APIs, thus, providing a way to use Angular components in <code>non-Angular environments</code>.</p>"
},{
  slug: "what-is-angular-universal",
  question: "What is Angular Universal?",
  answer: "<h3 id=\"what-is-angular-universal\">What is Angular Universal?</h3>\n<p>Angular Universal is a server-side rendering module for Angular applications in various scenarios. This is a community driven project and available under @angular/platform-server package. Recently Angular Universal is integrated with Angular CLI.</p>"
},{
  slug: "what-are-different-types-of-compilation-in-angular",
  question: "What are different types of compilation in Angular?",
  answer: "<h3 id=\"what-are-different-types-of-compilation-in-angular\">What are different types of compilation in Angular?</h3>\n<p>Angular offers two ways to compile your application,</p>\n<ol>\n<li>Just-in-Time (JIT)</li>\n<li>Ahead-of-Time (AOT)</li>\n</ol>"
},
{
  slug: "what-is-jit",
  question: "What is JIT?",
  answer: "<h3 id=\"what-is-jit\">What is JIT?</h3>\n<p>Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime. JIT compilation was the default until Angular 8, now default is AOT. When you run the ng build (build only) or ng serve (build and serve locally) CLI commands, the type of compilation (JIT or AOT) depends on the value of the aot property in your build configuration specified in angular.json. By default, aot is set to true.</p>"
},
{
  slug: "what-is-aot",
  question: "What is AOT?",
  answer: "<h3 id=\"what-is-aot\">What is AOT?</h3>\n<p>Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time. This is the default starting in Angular 9. When you run the ng build (build only) or ng serve (build and serve locally) CLI commands, the type of compilation (JIT or AOT) depends on the value of the aot property in your build configuration specified in angular.json. By default, aot is set to true.</p>\n<pre><code>ng build\nng serve\n</code></pre>"
},
{
  slug: "why-do-we-need-compilation-process",
  question: "Why do we need compilation process?",
  answer: "<h3 id=\"why-do-we-need-compilation-process\">Why do we need compilation process?</h3>\n<p>The Angular components and templates cannot be understood by the browser directly. Due to that Angular applications require a compilation process before they can run in a browser. For example, In AOT compilation, both Angular HTML and TypeScript code converted into efficient JavaScript code during the build phase before browser runs it.</p>"
},
{
  slug: "what-are-the-advantages-with-aot",
  question: "What are the advantages with AOT?",
  answer: "<h3 id=\"what-are-the-advantages-with-aot\">What are the advantages with AOT?</h3>\n<p>Below are the list of AOT benefits,</p>\n<ol>\n<li><strong>Faster rendering:</strong> The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.</li>\n<li><strong>Fewer asynchronous requests:</strong> It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.</li>\n<li><strong>Smaller Angular framework download size:</strong> Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.</li>\n<li><strong>Detect template errors earlier:</strong> Detects and reports template binding errors during the build step itself</li>\n<li><strong>Better security:</strong> It compiles HTML templates and components into JavaScript. So there won't be any injection attacks.</li>\n</ol>"
},{
  slug: "what-is-angular-ivy",
  question: "What is Angular Ivy?",
  answer: `<h3 id="what-is-angular-ivy">What is Angular Ivy?</h3>
  <p>Angular Ivy is a new rendering engine for Angular. You can choose to opt in a preview version of Ivy from Angular version 8.</p>
  <ol>
  <li>You can enable ivy in a new project by using the --enable-ivy flag with the ng new command</li>
  </ol>
  <pre><code class="language-bash">
  ng new ivy-demo-app --enable-ivy
  </code></pre>
  <ol start="2">
  <li>You can add it to an existing project by adding <code>enableIvy</code> option in the <code>angularCompilerOptions</code> in your project&#39;s <code>tsconfig.app.json</code>.</li>
  </ol>
  <pre><code class="language-javascript">
  {
   &quot;compilerOptions&quot;: { ... },
   &quot;angularCompilerOptions&quot;: {
     &quot;enableIvy&quot;: true
   }
  }
  </code></pre>
  `
},
{
  slug: "what-are-the-features-included-in-ivy-preview",
  question: "What are the features included in ivy preview?",
  answer: "<h3 id=\"what-are-the-features-included-in-ivy-preview\">What are the features included in ivy preview?</h3>\n<p>You can expect below features with Ivy preview,</p>\n<ol>\n<li>Generated code that is easier to read and debug at runtime</li>\n<li>Faster re-build time</li>\n<li>Improved payload size</li>\n<li>Improved template type checking</li>\n</ol>"
},{
  slug: "what-is-angular-dsl",
  question: "What is Angular DSL?",
  answer: "<h3 id=\"what-is-angular-dsl\">What is Angular DSL?</h3>\n<p>A domain-specific language (DSL) is a computer language specialized to a particular application domain. Angular has its own Domain Specific Language (DSL) which allows us to write Angular specific html-like syntax on top of normal html. It has its own compiler that compiles this syntax to html that the browser can understand. This DSL is defined in NgModules such as animations, forms, and routing and navigation.</p>\n<p>Basically you will see 3 main syntax in Angular DSL.</p>\n<ol>\n<li><code>()</code>: Used for Output and DOM events.</li>\n<li><code>[]</code>: Used for Input and specific DOM element attributes.</li>\n<li><code>*</code>: Structural directives(<code>*ngFor</code> or <code>*ngIf</code>) will affect/change the DOM structure.</li>\n</ol>"
},
{
  slug: "what-is-platform-in-angular",
  question: "What is platform in Angular?",
  answer: "<h3 id=\"what-is-platform-in-angular\">What is platform in Angular?</h3>\n<p>A platform is the context in which an Angular application runs. The most common platform for Angular applications is a web browser, but it can also be an operating system for a mobile device, or a web server. The runtime-platform is provided by the @angular/platform-\* packages and these packages allow applications that make use of <code>@angular/core</code> and <code>@angular/common</code> to execute in different environments.<br>i.e, Angular can be used as platform-independent framework in different environments, For example,<ol>\n<li>While running in the browser, it uses <code>platform-browser</code> package.</li>\n<li>When SSR(server-side rendering ) is used, it uses <code>platform-server</code> package for providing web server implementation.</li>\n</ol>"
},
{
  slug: "what-is-angular-material",
  question: "What is Angular Material?",
  answer: "<h3 id=\"what-is-angular-material\">What is Angular Material?</h3>\n<p>Angular Material is a collection of Material Design components for Angular framework following the Material Design spec. You can apply Material Design very easily using Angular Material. The installation can be done through npm or yarn,</p>\n<pre><code>npm install --save @angular/material @angular/cdk @angular/animations\n(OR)\nyarn add @angular/material @angular/cdk @angular/animations\n</code></pre>\n<p>It supports the most recent two versions of all major browsers. The latest version of Angular material is 8.1.1</p>"
},
{
  slug: "how-do-you-test-angular-application-using-cli",
  question: "How do you test Angular application using CLI?",
  answer: "<h3 id=\"how-do-you-test-angular-application-using-cli\">How do you test Angular application using CLI?</h3>\n<p>Angular CLI downloads and install everything needed with the Jasmine Test framework. You just need to run <code>ng test</code> to see the test results. By default this command builds the app in watch mode, and launches the <code>Karma test runner</code>. The output of test results would be as below,</p>\n<pre><code>10% building modules 1/1 modules 0 active\n...INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/\n...INFO [launcher]: Launching browser Chrome ...\n...INFO [launcher]: Starting browser Chrome\n...INFO [Chrome ...]: Connected on socket ...\nChrome ...: Executed 3 of 3 SUCCESS (0.135 secs / 0.205 secs)\n</code></pre>\n<p><strong>Note:</strong> A chrome browser also opens and displays the test output in the \"Jasmine HTML Reporter\".</p>"
},
{
  slug: "what-are-the-ways-to-trigger-change-detection-in-angular",
  question: "What are the ways to trigger change detection in Angular?",
  answer: "<h3 id=\"what-are-the-ways-to-trigger-change-detection-in-angular\">What are the ways to trigger change detection in Angular?</h3>\n<p>You can inject either ApplicationRef or NgZone, or ChangeDetectorRef into your component and apply below specific methods to trigger change detection in Angular. i.e, There are 3 possible ways,</p>\n<ol>\n<li><strong>ApplicationRef.tick():</strong> Invoke this method to explicitly process change detection and its side-effects. It check the full component tree.</li>\n<li><strong>NgZone.run(callback):</strong> It evaluate the callback function inside the Angular zone.</li>\n<li><strong>ChangeDetectorRef.detectChanges():</strong> It detects only the components and it's children.</li>\n</ol>"
},
{
  slug: "how-does-angular-simplifies-internationalization",
  question: "How does Angular simplifies Internationalization?",
  answer: "<h3 id=\"how-does-angular-simplifies-internationalization\">How does Angular simplifies Internationalization?</h3>\n<p>Angular simplifies the below areas of internationalization,</p>\n<ol>\n<li>Displaying dates, number, percentages, and currencies in a local format.</li>\n<li>Preparing text in component templates for translation.</li>\n<li>Handling plural forms of words.</li>\n<li>Handling alternative text.</li>\n</ol>"
},{
  slug: "what-are-the-list-of-template-expression-operators",
  question: "What are the list of template expression operators?",
  answer: "<h3 id=\"what-are-the-list-of-template-expression-operators\">What are the list of template expression operators?</h3>\n<p>The Angular template expression language supports three special template expression operators.</p>\n<ol>\n<li>Pipe operator</li>\n<li>Safe navigation operator</li>\n<li>Non-null assertion operator</li>\n</ol>"
},
{
  slug: "what-is-the-precedence-between-pipe-and-ternary-operators",
  question: "What is the precedence between pipe and ternary operators?",
  answer: "<h3 id=\"what-is-the-precedence-between-pipe-and-ternary-operators\">What is the precedence between pipe and ternary operators?</h3>\n<p>The pipe operator has a higher precedence than the ternary operator (?:). For example, the expression <code>first ? second : third | fourth</code> is parsed as <code>first ? second : (third | fourth)</code>.</p>"
},
{
  slug: "why-is-not-necessary-to-use-entrycomponents-array-every-time",
  question: "Why is not necessary to use entryComponents array every time?",
  answer: "<h3 id=\"why-is-not-necessary-to-use-entrycomponents-array-every-time\">Why is not necessary to use entryComponents array every time?</h3>\n<p>Most of the time, you don't need to explicity to set entry components in entryComponents array of ngModule decorator. Because angular adds components from both @NgModule.bootstrap and route definitions to entry components automatically.</p>"
},
{
  slug: "do-i-still-need-to-use-entrycomponents-array-in-angular9",
  question: "Do I still need to use entryComponents array in Angular9?",
  answer: "<h3 id=\"do-i-still-need-to-use-entrycomponents-array-in-angular9\">Do I still need to use entryComponents array in Angular9?</h3>\n<p>No. In previous angular releases, the entryComponents array of ngModule decorator is used to tell the compiler which components would be created and inserted dynamically in the view. In Angular9, this is not required anymore with Ivy.</p>"
},
{
  slug: "what-is-angular-compiler",
  question: "What is Angular compiler?",
  answer: "<h3 id=\"what-is-angular-compiler\">What is Angular compiler?</h3>\n<p>The Angular compiler is used to convert the application code into JavaScript code. It reads the template markup, combines it with the corresponding component class code, and emits component factories which creates JavaScript representation of the component along with elements of @Component metadata.</p>"
},
{
  slug: "what-is-the-role-of-ngmodule-metadata-in-compilation-process",
  question: "What is the role of ngModule metadata in compilation process?",
  answer: "<h3 id=\"what-is-the-role-of-ngmodule-metadata-in-compilation-process\">What is the role of ngModule metadata in compilation process?</h3>\n<p>The <code>@NgModule</code> metadata is used to tell the Angular compiler what components to be compiled for this module and how to link this module with other modules.</p>"
},
{
  slug: "how-does-angular-finds-components-directives-and-pipes",
  question: "How does angular finds components, directives and pipes?",
  answer: "<h3 id=\"how-does-angular-finds-components-directives-and-pipes\">How does angular finds components, directives and pipes?</h3>\n<p>The Angular compiler finds a component or directive in a template when it can match the selector of that component or directive in that template. Whereas it finds a pipe if the pipe's name appears within the pipe syntax of the template HTML.</p>"
},{
  slug: "what-is-zone",
  question: "What is zone?",
  answer: "<h3 id=\"what-is-zone\">What is zone?</h3>\n<p>A Zone is an execution context that persists across async tasks. Angular relies on zone.js to run Angular's change detection processes when native JavaScript operations raise events</p>"
},{
  slug: "what-is-ngzone",
  question: "What is NgZone?",
  answer: "<h3 id=\"what-is-ngzone\">What is NgZone?</h3>\n<p>Angular provides a service called NgZone which creates a zone named <code>angular</code> to automatically trigger change detection when the following conditions are satisfied.</p>\n<ol>\n<li>When a sync or async function is executed.</li>\n<li>When there is no microTask scheduled.</li>\n</ol>"
},{
  slug: "what-is-component-test-harnesses",
  question: "What is Component Test Harnesses?",
  answer: "<h3 id=\"what-is-component-test-harnesses\">What is Component Test Harnesses?</h3>\n<p>A component harness is a testing API around an Angular directive or component to make tests simpler by hiding implementation details from test suites. This can be shared between unit tests, integration tests, and end-to-end tests. The idea for component harnesses comes from the <strong>PageObject</strong> pattern commonly used for integration testing.</p>"
},
{
  slug: "what-is-the-benefit-of-automatic-inlining-of-fonts",
  question: "What is the benefit of Automatic Inlining of Fonts?",
  answer: "<h3 id=\"what-is-the-benefit-of-automatic-inlining-of-fonts\">What is the benefit of Automatic Inlining of Fonts?</h3>\n<p>During compile time, Angular CLI will download and inline the fonts that your application is using. This performance update speed up the first contentful paint(FCP) and this feature is enabled by default in apps built with version 11.</p>"
},
{
  slug: "what-is-content-projection",
  question: "What is content projection?",
  answer: "<h3 id=\"what-is-content-projection\">What is content projection?</h3>\n<p>Content projection is a pattern in which you insert, or project, the content you want to use inside another component.</p>"
},
{
  slug: "what-is-ng-content-and-its-purpose",
  question: "What is ng-content and its purpose?",
  answer: "<h3 id=\"what-is-ng-content-and-its-purpose\">What is ng-content and its purpose?</h3>\n<p>The ng-content is used to insert the content dynamically inside the component that helps to increase component reusability.</p>"
},
{
  slug: "what-is-a-di-token",
  question: "What is a DI token?",
  answer: `<h3 id="what-is-a-di-token">What is a DI token?</h3>
  <p>A DI token is a lookup token associated with a dependency provider in dependency injection system. The injector maintains an internal token-provider map that it references when asked for a dependency and the DI token is the key to the map. Let&#39;s take example of DI Token usage,</p>
  <pre><code class="language-javascript">const BASE_URL = new InjectionToken() &lt; string &gt; &quot;BaseUrl&quot;;
  const injector = Injector.create({
    providers: [{ provide: BASE_URL, useValue: &quot;http://some-domain.com&quot; }],
  });
  const url = injector.get(BASE_URL);
  </code></pre>
  `
},{
  slug: "what-is-the-purpose-of-hidden-property",
  question: "What is the purpose of hidden property?",
  answer: `<h3 id="what-is-the-purpose-of-hidden-property">What is the purpose of hidden property?</h3> <p>The hidden property is used to show or hide the associated DOM element, based on an expression. It can be compared close to <code>ng-show</code> directive in AngularJS. Let's say you want to show user name based on the availability of user using <code>hidden</code> property.</p> 
  <pre><code class="language-javascript">
  &lt;div [hidden]="!user.name"&gt; My name is: {{user.name}} &lt;/div&gt; 
  </code></pre> `
},{
  slug: "difference-between-ngif-and-hidden-property",
  question: "What is the difference between ngIf and hidden property?",
  answer: `<h3 id="difference-between-ngif-and-hidden-property">What is the difference between ngIf and hidden property?</h3> <p>The main difference is that <code>*ngIf</code> will remove the element from the DOM, while <code>[hidden]</code> actually plays with the CSS style by setting <code>display:none</code>. Generally it is expensive to add and remove stuff from the DOM for frequent actions.</p>`
  },
  {
  slug: "purpose-of-ngfor-trackby",
  question: "What is the purpose of ngFor trackBy?",
  answer: `<h3 id="purpose-of-ngfor-trackby">What is the purpose of ngFor trackBy?</h3> 
  <p>The main purpose of using <code>*ngFor</code> with <code>trackBy</code> option is performance optimization. 
  Normally if you use NgFor with large data sets, a small change to one item by removing or adding an item, can trigger a cascade of DOM manipulations. 
  In this case, Angular sees only a fresh list of new object references and to replace the old DOM elements with all new DOM elements. You can help Angular 
  to track which items added or removed by providing a <code>trackBy</code> function which takes the index and the current item as arguments and needs to 
  return the unique identifier for this item.</p> <p>For example, lets set <code>trackBy</code> to the <code>trackByTodos()</code> method</p> 
  <pre><code class="language-javascript">
  &lt;div *ngFor="let todo of todos; trackBy: trackByTodos"&gt; ({{todo.id}}) {{todo.name}} &lt;/div&gt; 
  </code></pre> 
  <p>and define the <code>trackByTodos</code> method,</p> 
  <pre><code class="language-javascript">
  trackByTodos(index: number, item: Todo): number { return todo.id; } 
  </code></pre>`
  },{
    slug: "ngcc",
    question: "What is ngcc?",
    answer: `<h3 id="ngcc">What is ngcc?</h3>
    
    <p>The ngcc(Angular Compatibility Compiler) is a tool which upgrades node_module compiled with non-ivy ngc into ivy compliant format. The <code>postinstall</code> script from <code>package.json</code> will make sure your <code>node_modules</code> will be compatible with the Ivy renderer.</p>
    <pre><code class="language-javascript">
    "scripts": {
       "postinstall": "ngcc"
    }
    </code></pre>
    <p>Whereas, Ivy compiler (ngtsc), which compiles Ivy-compatible code.</p>`
    },{
      slug: "data-update-scenarios-for-change-detection",
      question: "What are the possible data update scenarios for change detection?",
      answer: `<h3 id="data-update-scenarios-for-change-detection">What are the possible data update scenarios for change detection?</h3>
    <ol>
    <li><strong>Component initialization:</strong> While bootstrapping the Angular application, Angular triggers the <code>ApplicationRef.tick()</code> to call change detection and View Rendering.</li>
    <li><strong>Event listener:</strong> The DOM event listener can update the data in an Angular component and trigger the change detection too.
    <pre><code class="language-javascript">
    @Component({
      selector: "app-event-listener",
      template: \`&lt;button (click)="onClick()"&gt;Click&lt;/button&gt;
        {{ message }}\`,
    })
    export class EventListenerComponent {
      message = "";
    
      onClick() {
        this.message = "data updated";
      }
    }
    </code></pre></li>
    <li><strong>HTTP Data Request:</strong> You can get data from a server through an HTTP request
    <pre><code class="language-javascript">
    data = 'default value';
    constructor(private httpClient: HttpClient) {}
    
    ngOnInit() {
      this.httpClient.get(this.serverUrl).subscribe(response =&gt; {
        this.data = response.data; // change detection will happen automatically
      });
    }
    </code></pre></li>
    <li><strong>Macro tasks setTimeout() or setInterval():</strong> You can update the data in the callback function of setTimeout or setInterval
    <pre><code class="language-javascript">
    data = 'default value';
    
    ngOnInit() {
      setTimeout(() =&gt; {
        this.data = 'data updated'; // Change detection will happen automatically
      });
    }
    </code></pre></li>
    <li><strong>Micro tasks Promises:</strong> You can update the data in the callback function of promise
    <pre><code class="language-javascript">
    data = 'initial value';
    
    ngOnInit() {
      Promise.resolve(1).then(v =&gt; {
        this.data = v; // Change detection will happen automatically
      });
    }
    </code></pre></li>
    <li><strong>Async operations like Web sockets and Canvas:</strong> The data can be updated asynchronously using WebSocket.onmessage() and Canvas.toBlob().</li>
    </ol>`
    },{
      slug: "ngfor-and-ngif-on-the-same-element",
      question: "How to set ngFor and ngIf on the same element?",
      answer: `<h3 id="ngfor-and-ngif-on-the-same-element">How to set ngFor and ngIf on the same element?</h3>
    <p>Sometimes you may need to use both ngFor and ngIf on the same element, but unfortunately, you are going to encounter the following template error:</p>
    <pre><code class="language-javascript">
    Template parse errors: Can't have multiple template bindings on one element.
    </code></pre>
    <p>In this case, you need to use either ng-container or ng-template. For example, if you try to loop over the items only when the items are available, the below code throws an error in the browser:</p>
    <pre><code class="language-javascript">
    &lt;ul *ngIf="items" *ngFor="let item of items"&gt;
      &lt;li&gt;&lt;/li&gt;
    &lt;/ul&gt;
    </code></pre>
    <p>This can be fixed by using ng-container:</p>
    <pre><code class="language-javascript">
    &lt;ng-container *ngIf="items"&gt;
      &lt;ul *ngFor="let item of items"&gt;
        &lt;li&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/ng-container&gt;
    </code></pre>`
    },{
      slug: "what-is-host-property-in-css",
      question: "What is host property in css?",
      answer: `<h3 id="what-is-host-property-in-css">What is host property in css?</h3>
    <p>The <code>:host</code> pseudo-class selector is used to target styles in the element that hosts the component. Since the host element is in a parent component's template, you can't reach the host element from inside the component by other means.</p>
    <p>For example, you can create a border for parent element as below:</p>
    <pre><code class="language-javascript">
    :host {
      display: block;
      border: 1px solid black;
      padding: 20px;
    }
    </code></pre>`
    },{
      slug: "what-is-hydration",
      question: "What is hydration?",
      answer: `<h3 id="what-is-hydration">What is hydration?</h3>
    <p>Hydration is the process that restores the server side rendered application on the client. This includes things like reusing the server rendered DOM structures, persisting the application state, transferring application data that was retrieved already by the server, and other processes.</p>
    <p>To enable hydration, we have to enable server side rendering or Angular Universal. Once enabled, we can add the following piece of code in the root component:</p>
    <pre><code class="language-javascript">
    import {
      bootstrapApplication,
      provideClientHydration,
    } from "@angular/platform-browser";
    
    bootstrapApplication(RootCmp, {
      providers: [provideClientHydration()],
    });
    </code></pre>
    <p>Alternatively we can add <code>providers: [provideClientHydration()]</code> in the App Module:</p>
    <pre><code class="language-javascript">
    import { provideClientHydration } from "@angular/platform-browser";
    import { NgModule } from "@angular/core";
    @NgModule({
      declarations: [RootCmp],
      exports: [RootCmp],
      bootstrap: [RootCmp],
      providers: [provideClientHydration()],
    })
    export class AppModule {}
    </code></pre>`
    }


]
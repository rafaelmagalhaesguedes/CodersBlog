"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('posts', [
            {
                id: 1,
                title: 'What is NodeJS?',
                content: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts. Though .js is the standard filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png',
                user_id: 2,
                published: new Date('2024-03-10T19:58:00.000Z'),
                updated: new Date('2011-08-01T19:58:51.000Z'),
            },
            {
                id: 2,
                title: 'What is ReactJS?',
                content: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS. React allows developers to create large web applications that can change data without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC. It is often used as the V in the MVC.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/260px-React-icon.svg.png',
                user_id: 2,
                published: new Date('2024-03-20T10:52:00.000Z'),
                updated: new Date('2011-08-01T12:30:51.000Z'),
            },
            {
                id: 3,
                title: 'What is Redux?',
                content: 'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook\'s Flux architecture, it was created by Dan Abramov and Andrew Clark. Redux is tiny (about 2kB) and has no dependencies. According to JavaScript analytics service Libscore, Redux is currently being used on the websites of Netflix, Imgur, Airbnb, and many others. Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of add-ons available. Redux is a small library with a simple, limited API designed to be a predictable container for application state. It operates in a similar fashion to a reducing function, hence the name. Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux: single source of truth, state is read-only, and changes are made with pure functions.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
                user_id: 2,
                published: new Date('2024-04-01T19:18:00.000Z'),
                updated: new Date('2011-08-01T15:29:51.000Z'),
            },
            {
                id: 4,
                title: 'What is JavaScript?',
                content: 'JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. This also includes support for object-oriented, imperative, and declarative programming styles. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png',
                user_id: 2,
                published: new Date('2024-04-02T19:58:00.000Z'),
                updated: new Date('2011-08-01T03:50:51.000Z'),
            },
            {
                id: 5,
                title: 'What is PostgreSQL?',
                content: 'PostgreSQL is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley. PostgreSQL features transactions with Atomicity, Consistency, Isolation, Durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. It is the default database for macOS Server, and is also available for Linux, FreeBSD, OpenBSD, and Windows. PostgreSQL is developed by the PostgreSQL Global Development Group, consisting of a handful of volunteers employed and supervised by companies such as Red Hat, EnterpriseDB, Citus Data, and Crunchy Data. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness. PostgreSQL runs on all major operating systems, including Linux, UNIX (AIX, BSD, HP-UX, SGI IRIX, macOS, Solaris, Tru64), and Windows. It is fully ACID compliant, has full support for foreign keys, joins, views, triggers, and stored procedures (in multiple languages). It includes most SQL:2008 data types, including INTEGER, NUMERIC, BOOLEAN, CHAR, VARCHAR, DATE, INTERVAL, and TIMESTAMP. It also supports storage of binary large objects, including pictures, sounds, or video. It has native programming interfaces for C/C++, Java, .Net, Perl, Python, Ruby, Tcl, ODBC, among others, and exceptional documentation.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/220px-Postgresql_elephant.svg.png',
                user_id: 2,
                published: new Date('2024-04-03T19:58:00.000Z'),
                updated: new Date('2011-08-01T09:22:51.000Z'),
            },
            {
                id: 6,
                title: 'What is MySQL?',
                content: 'MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language. A relational database organizes data into one or more data tables in which data types may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer\'s storage system, manages users, allows for network access, and facilitates testing database integrity and creation of backups. MySQL is a popular choice of database for use in web applications, and is a central component of the widely used LAMP open-source web application software stack (and other "AMP" stacks). LAMP is an acronym for "Linux, Apache, MySQL, Perl/PHP/Python". MySQL is used by many database-driven web applications, including Drupal, Joomla, phpBB, and WordPress. MySQL is also used by many popular websites, including Facebook, Flickr, MediaWiki, Twitter, and YouTube. MySQL is written in C and C++. Its SQL parser is written in yacc, but it uses a home-brewed lexical analyzer. MySQL works on many operating systems and with many languages including PHP, PERL, C, C++, JAVA, etc. MySQL works very quickly and works well even with large data sets.',
                image: 'https://images.unsplash.com/photo-1662026911591-335639b11db6?q=80&w=1724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                user_id: 1,
                published: new Date('2024-04-04T19:58:00.000Z'),
                updated: new Date('2011-08-01T06:00:51.000Z'),
            },
            {
                id: 7,
                title: 'What is TypeScript?',
                content: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript Checker can be used, or Babel can be invoked to convert TypeScript to JavaScript. TypeScript supports definition files that can contain type information of existing JavaScript libraries, similar to C/C++ header files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
                user_id: 2,
                published: new Date('2024-04-05T02:51:00.000Z'),
                updated: new Date('2011-08-01T19:58:51.000Z'),
            },
            {
                id: 8,
                title: 'What is Kubernetes?',
                content: 'Kubernetes (commonly stylized as k8s) is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation. It aims to provide a "platform for automating deployment, scaling, and operations of application containers across clusters of hosts". It works with a range of container tools, including Docker. Many cloud services offer a Kubernetes-based platform or infrastructure as a service (PaaS or IaaS) on which Kubernetes can be deployed as a platform-providing service. Many vendors also provide their own branded Kubernetes distributions. Kubernetes ties together a number of Linux containers, groups of containers that make up an application, into a manageable unit. Kubernetes was first developed by Google before being open-sourced in 2014. Google continues to lead the development of Kubernetes, with the support of many other companies, including Microsoft, Red Hat, IBM, and Docker. Kubernetes is written in the Go programming language and is often referred to as K8s (as in Kubernetes, with the 8 representing the eight letters "ubernete"). The name Kubernetes originates from Greek, meaning helmsman or pilot. Google open-sourced the Kubernetes project in 2014. Kubernetes builds upon a decade and a half of experience that Google has with running production workloads at scale, combined with best-of-breed ideas and practices from the community. Kubernetes is hosted by the Cloud Native Computing Foundation (CNCF).',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/220px-Kubernetes_logo_without_workmark.svg.png',
                user_id: 1,
                published: new Date('2024-04-06T04:00:00.000Z'),
                updated: new Date('2011-08-01T19:58:51.000Z'),
            }
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('posts', {});
    },
};
//# sourceMappingURL=03-posts.js.map
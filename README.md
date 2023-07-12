<p align="center">
  <img height="100" width="350" src="https://github.com/Welber33/airbnb-clone/assets/44277956/d15b1f7d-f30b-4546-b44e-d7cfe6e22f18"/> 
</p>
<h1 align="center">Airbnb 2.0</h1>
<h4 align="center"> Project developed using experimental Next.js 13 features</h4>
<p align="center">
  <img src="https://img.shields.io/badge/ReactJs-18.2.0-61DAFB?style=for-the-badge&logo=React" />
  <img src="https://img.shields.io/badge/NextJs-13.4.4-000000?style=for-the-badge&logo=Next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.3.2-06B6D4?style=for-the-badge&logo=Tailwind CSS" />
  <img src="https://img.shields.io/badge/Prisma-4.15.0-2D3748?style=for-the-badge&logo=Prisma" />
</p>

  <p align="center">
    <img src="https://github.com/Welber33/airbnb-clone/assets/44277956/68e5ad67-8218-4a31-9a3c-6eae363eece5" />
  </p>
  
  
Airbnb 2.0 is a booking and reservation website built with Next.js 13+ using experimental features like useNavigation for routering. The purpose of developing this application was to enhance learning in Next.js pagination structure, relational object mapping with Prisma, application state management with Zustand and data storage with MongoDB Atlas. This is a web project built with the concepts of mobile first. It also uses the most variety of front-end technologies based on ReactJs library.

## Features
- [x] Home Page with all properties listed.
- [x] Search by property map location; search by property number of rooms, bathrooms and guests quantity; and search by date of reservations.
- [x] Click on topics to search by each category.
- [x] Create an account traditionaly or with Google and Github.
- [x] Log In log out.  
- [x] Create property (set country location, number of rooms, bathrooms, guests quantity, upload property photo with cloudinary and price per night).
- [x] Delete your own created property.
- [x] Any reservation made on a deleted property will automatically be cancelled.
- [x] Cancel reservations made on your property.
- [x] Make reservations on other users properties.
- [x] Cancel reservations made on other user properties.
- [x] Make a reservation only on free dates.
- [x] Favorite and unfavorite destination.
- [x] Trips screen.
- [x] Favorites screen.
- [x] Properties screen.
- [x] Reservations screen.    

## Requisites

Before getting started with this project, you must have installed in your machine the following developer build tools:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) version *14.X* and [Yarn](https://yarnpkg.com/) version *1.22.19* or latest. It's possible to install the developer build tools above using the following package managers [Chocolatey](https://chocolatey.org/) for windows machines and [Homebrew](https://brew.sh/index_pt-br) for MacOS machines.
It's highly recommended to download [VSCode](https://code.visualstudio.com/) to work on, as it has the most variety of extensions possible and particular advantages to code javascript applications and it's totally free. It's necessary to create your github oauth application and set the callback URL and your origin requests.

### 🎲 Running the project locally

```bash
# Clone the project
$ git clone https://github.com/Welber33/airbnb-clone.git

# Go to the folder where is the cloned project
$ cd folder_with_the_cloned_project

# Open the project on vscode via terminal/cmd
$ code .

# Install the dependencies
$ npm install

# Execute the application in Dev Mode
$ npm run dev
```

## Available commands

Running commands with npm `npm [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `install`       | Install all development dependencies of the app |
| `run dev`       | Starts a development instance of the app |
| `build`         | The build script is responsible for compiling, bundling, and optimizing the project's source code and assets for production deployment |


### Setup .env file

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

## Techs 

This project made use of the following technologies and developer tools: 

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [NextAuth](https://next-auth.js.org/getting-started/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB Atlas](https://www.mongodb.com/)
  
## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE) for details.

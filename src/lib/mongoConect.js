import mongoose from 'mongoose'

    const MONGODB_URI = process.env.MONGODB_URI
    
    if (!MONGODB_URI) {
      throw new Error(
        'Please define the MONGODB_URI enviroment variable inside .env.local'
      )
    }

    let cached = global.mongoose

    if (!cached) {
      cached = global.mongoose = { conn: null, promise: null }
    }

    async function dbConnect () {
      if (cached.conn) {
        console.log('Usando conexión de base de datos cacheada') // Agrega este log
        return cached.conn
      }

      if (!cached.promise) {
        const opts = {
          bufferCommands: false
        }

        console.log('Intentando conectar a la base de datos...') // Agrega este log
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
          console.log('Conexión a la base de datos exitosa!') // Agrega este log
          return mongoose
        }).catch((error) => {
          console.error('Error al conectar a la base de datos:', error) // Agrega este log para errores
          throw error // Vuelve a lanzar el error para que sea manejado más arriba si es necesario
        })
      }
      cached.conn = await cached.promise
      return cached.conn
    }

    export default dbConnect
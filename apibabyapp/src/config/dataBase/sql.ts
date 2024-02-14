import sql from 'mssql'
import config from '@config/config'
import { type SqlData } from '@interfaces/sqlParams.interface'
import { HttpException } from '@utils/error.utils'
class Database {
  private static instance: Database
  private readonly pool: sql.ConnectionPool

  private constructor() {
    this.pool = new sql.ConnectionPool({
      user: String(config.SqlServer.USER),
      password: String(config.SqlServer.PASS),
      server: String(config.SqlServer.SERVER),
      database: String(config.SqlServer.DATABASE),
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    })
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  public async connect(): Promise<void> {
    try {
      await this.pool.connect()
      console.log(`Conexión establecida con éxito a la base ${String(config.SqlServer.DATABASE)}`)
    } catch (err) {
      console.log(
        `Error al conectar con la base de datos ${String(config.SqlServer.DATABASE)}:`,
        err
      )
      setTimeout(() => {
        void this.connect()
      }, 2000)
    }
  }

  public async close(): Promise<void> {
    try {
      await this.pool.close()
      console.log('Conexión cerrada con éxito.')
    } catch (err) {
      console.error('Error al cerrar la conexión con la base de datos:', err)
    }
  }

  async executeSPRecordset(obj: SqlData): Promise<any> {
    return await new Promise((resolve, reject) => {
      const req = new sql.Request(this.pool)

      if (obj.params !== undefined) {
        obj.params.forEach((p) => {
          req.input(p.name, p.sqlType, p.value)
        })
      }
      req
        .execute(obj.spName)
        .then((recordset) => {
          resolve(recordset.recordset)
        })
        .catch((err) => {
          reject(HttpException(String(err.message), config.SqlServer.ERRORCODE))
        })
    })
  }

  async executeSpRecordsets(obj: SqlData): Promise<any> {
    return await new Promise((resolve, reject) => {
      const req = new sql.Request(this.pool)
      if (obj.params !== undefined) {
        obj.params.forEach((p) => {
          req.input(p.name, p.sqlType, p.value)
        })
      }
      req
        .execute(obj.spName)
        .then((recordset) => {
          resolve(recordset.recordsets)
        })
        .catch((err) => {
          reject(HttpException(String(err.message), config.SqlServer.ERRORCODE))
        })
    })
  }

  async executeSPBoolean(obj: SqlData): Promise<any> {
    return await new Promise((resolve, reject) => {
      const req = new sql.Request(this.pool)

      if (obj.params !== undefined) {
        obj.params.forEach((p) => {
          req.input(p.name, p.sqlType, p.value)
        })
      }
      req
        .execute(obj.spName)
        .then(() => {
          resolve(true)
        })
        .catch((err) => {
          reject(HttpException(String(err.message), config.SqlServer.ERRORCODE))
        })
    })
  }

  async executeSPReturnValue(obj: SqlData): Promise<any> {
    return await new Promise((resolve, reject) => {
      const req = new sql.Request(this.pool)

      if (obj.params !== undefined) {
        obj.params.forEach((p) => {
          req.input(p.name, p.sqlType, p.value)
        })
      }
      req
        .execute(obj.spName)
        .then((recordset) => {
          resolve(recordset.returnValue)
        })
        .catch((err) => {
          reject(HttpException(String(err.message), config.SqlServer.ERRORCODE))
        })
    })
  }
}

export default Database.getInstance()

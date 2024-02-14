import 'dotenv/config'
import {
  Char,
  Int,
  Numeric,
  SmallInt,
  TinyInt,
  VarChar,
  NVarChar,
  Bit,
  Date,
  DateTime,
  Decimal
} from 'mssql'

export default {
  SqlServer: {
    SERVER: process.env.SQL_SERVER,
    DATABASE: process.env.SQL_DATABASE,
    USER: process.env.SQL_USER,
    PASS: process.env.SQL_PASS,
    PORT: process.env.SQL_PORT,
    ERRORCODE: 422,
  },
  Api: {
    PORT: process.env.API_PORT,
    CODI_APLICACION: process.env.CODI_APLICACION,
    KEY: process.env.API_KEY,
    NAME: process.env.NAME,
  },
  SqlTypes: {
    Int,
    TinyInt,
    SmallInt,
    Numeric,
    Char,
    VarChar,
    NVarChar,
    Bit,
    Date,
    DateTime,
    Decimal
  }
}

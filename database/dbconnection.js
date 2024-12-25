
import myaql from 'mysql2'
export const dbconnection=()=>{

    const conn = myaql.createConnection('mysql://u9ifwyontdxwafv4:bA9LyJhE5kIISMZrhRjv@bpsdizfdm1vd1frdgzke-mysql.services.clever-cloud.com:3306/bpsdizfdm1vd1frdgzke')
    conn.connect((err)=>{
        if(err) return console.log("database error");
        console.log("database connected successfully");
        
        
    })
    return conn

}
import { Observable } from "rxjs";


export const isPrime= (n:any)=>{
    if(n<2)
        return false;
    for(let i=0; i<n; i++)
        if(n%i===0)
            return false;

    return true;
}


export const findPrimesCb=(min:number,max:number,cb:Function)=>{

    let lo=min;
    let hi=Math.min(lo+1000,max);
    let primes:number[]=[];
    let i= setInterval(()=>{

        if(min>=max){
            clearInterval(i);
            return cb(new Error(`Invalid Range ${min}-${max}`));
        }

        for(let i=lo;i<hi;i++){
            if(isPrime(i))
                primes.push(i);
        }

        if(hi===max){
            clearInterval(i);
            return cb(null, primes);
        }
        else{ 
            lo=hi;
            hi=Math.min(lo+1000,max);
        }

    },10);

}


export const findPrimesAsync=(min:number,max:number)=>{

    let lo=min;
    let hi=Math.min(lo+1000,max);
    let primes:number[]=[];
    return new Promise((resolve, reject) =>{

        let i= setInterval(()=>{
    
            if(min>=max){
                clearInterval(i);
                return reject(new Error(`Invalid Range ${min}-${max}`));
            }
    
            for(let i=lo;i<hi;i++){
                if(isPrime(i))
                    primes.push(i);
            }
    
            if(hi===max){
                clearInterval(i);
                return resolve(primes);
            }
            else{ 
                lo=hi;
                hi=Math.min(lo+1000,max);
            }
    
        },10);
    });
}

interface Subscriber{
    next?:Function;
    error?:Function;
    complete?:Function;
}


export const findPrimesCustomSubscription=(min:number,max:number,
                                           subscriber:Subscriber        
                                                    )=>{

    let lo=min;
    let hi=Math.min(lo+1000,max);
    //let primes:number[]=[];
    let count=0;
    let i= setInterval(()=>{

        if(min>=max){
            clearInterval(i);
            return subscriber.error!(new Error(`Invalid Range ${min}-${max}`));
        }

        for(let i=lo;i<hi;i++){
            if(isPrime(i)){
                //primes.push(i);
                subscriber.next!(i); //send the next number. may be called many times
                count++;
            }
        }

        if(hi===max){
            clearInterval(i);
            //return cb(null, primes);
            return subscriber.complete!(count); //informs task is over.
        }
        else{ 
            lo=hi;
            hi=Math.min(lo+1000,max);
        }

    },10);

}

export const  findPrimesObservable = (min:number,max:number, subscriber:any) => {

    return new Observable<number>(()=>{
        let lo=min;
        let hi=Math.min(lo+1000,max);
        //let primes:number[]=[];
        let count=0;
        let i= setInterval(()=>{
    
            if(min>=max){
                clearInterval(i);
                return subscriber.error!(new Error(`Invalid Range ${min}-${max}`));
            }
    
            for(let i=lo;i<hi;i++){
                if(isPrime(i)){
                    //primes.push(i);
                    subscriber.next!(i); //send the next number. may be called many times
                    count++;
                }
            }
    
            if(hi===max){
                clearInterval(i);
                //return cb(null, primes);
                return subscriber.complete!(count); //informs task is over.
            }
            else{ 
                lo=hi;
                hi=Math.min(lo+1000,max);
            }    
        },10);        
    });
}
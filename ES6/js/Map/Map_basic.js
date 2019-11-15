{
    let myMap=new Map;

    let ketstring = 'string';
    let keyobj = {
        age:18,
        tall:170,
    };
    let keyFunc = ()=>{
        alert('123');
    } 

    myMap.set(ketstring,"value associated with 'a string'");
    myMap.set(keyobj,'value associated with keyObj');
    myMap.set(keyFunc,'value associated with keyFunc');

    console.log(myMap.get(ketstring));
    console.log(myMap.get(keyobj));
    console.log(myMap.get(keyFunc));

    console.log(myMap.get('string'));
    console.log(myMap.get({
        age:18,
        tall:170,
    }));
    console.log(myMap.get(()=>{
        alert('123');
    } ));

}
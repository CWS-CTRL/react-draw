let count = 0;

const setExclusiveId = () => { 
    count++;
    return (id:string) => { 
        return id.startsWith("#") ? `#${count}${id.substring(1)}` : `${count}${id}`;
    }
}

export default setExclusiveId;
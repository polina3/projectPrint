

type TypeParam = {
    params: { 
        id: string 
    }
}

export default function About({ params }:TypeParam){
    return (
        <div > 
            {params.id}
        </div>
    )
}
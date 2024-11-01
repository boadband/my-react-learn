import React from 'react'
import { useContext} from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content ;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>you got no favorites</p>; 
    }else{
        content =<MeetupList  meetups={favoritesCtx.favorites}/>
    }
    
    return (
        <section>
            <h1>Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage

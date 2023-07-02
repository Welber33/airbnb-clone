import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

export default async function ListingPage() {
  const favoriteListings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if(favoriteListings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState 
          title="No favorites found"
          subtitle="Looks like you have no favorite listings"
        />
      </ClientOnly>
    )
  }
  
  return (
    <ClientOnly>
      <FavoritesClient 
        listings={favoriteListings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

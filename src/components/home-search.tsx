import { RootProvider } from 'fumadocs-ui/provider/astro';
import { FullSearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { navigate } from 'astro:transitions/client';
import SearchDialog, { searchHotKey } from './search';

export function HomeSearch() {
  return (
    <RootProvider
      pathname="/"
      params={{}}
      navigate={navigate}
      theme={{ enabled: false }}
      search={{ SearchDialog, hotKey: searchHotKey }}
    >
      <FullSearchTrigger className="w-full max-w-xs rounded-full bg-fd-card" />
    </RootProvider>
  );
}

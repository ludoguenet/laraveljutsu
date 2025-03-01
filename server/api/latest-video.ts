export default defineEventHandler(async () => {
    try {
        const channelId = 'UC36hi0WMeiR8HpUy-A2s4vQ';
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

        const response = await fetch(rssUrl);
        const xmlData = await response.text();

        return xmlData;
      } catch (error) {
        console.error('Error fetching YouTube RSS:', error);
        return { error: 'Failed to fetch YouTube feed' };
      }
})

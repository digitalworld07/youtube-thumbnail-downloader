function getThumbnail() {
            const videoUrl = document.getElementById('videoUrl').value;
            const videoId = extractVideoId(videoUrl);
            if (videoId) {
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                document.getElementById('thumbnailResult').innerHTML = `<img src="${thumbnailUrl}" alt="YouTube Thumbnail">`;
            } else {
                alert('Please enter a valid YouTube URL');
            }
        }

        function extractVideoId(url) {
            const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
            const match = url.match(regex);
            return match ? match[1] : null;
        }

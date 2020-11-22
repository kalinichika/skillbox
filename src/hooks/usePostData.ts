import axios from 'axios';
import { useEffect, useState } from 'react';

interface IPostData {
  id: string;
  url: string;
  title: string;
  time: Date;
  preview: string;
  karmaValue: number;
  commentsValue: number;
  author: {
    name: string;
    href: string;
    avatar: string;
  };
}

interface IPostContextData {
  data: {
    id: string;
    url: string;
    author: string;
    title: string;
    num_comments: number;
    ups: number;
    sr_detail: {
      icon_img: string;
      header_img: string;
      created_utc: number;
    };
  };
}

export function usePostData() {
  const [data, setData] = useState<IPostData[]>([]);

  useEffect(() => {
    axios
      .get('https://www.reddit.com/r/popular/best.json?sr_detail=true', {
        headers: {
          'Content-type': `application/json`,
        },
      })
      .then((resp) => {
        const formattedPostData = resp.data.data.children.map(
          ({ data }: IPostContextData) => {
            const {
              id = '',
              url = '',
              title = '',
              author = '',
              ups = 0,
              num_comments = 0,
              sr_detail = {
                icon_img: '',
                header_img: '',
                created_utc: 0,
              },
            } = data || {};
            return {
              id: id,
              url: url,
              title: title,
              time: new Date(new Date().getTime() - sr_detail.created_utc),
              preview: sr_detail.header_img,
              karmaValue: ups,
              commentValue: num_comments,
              author: {
                name: author,
                href: '#user-url',
                avatar: sr_detail.icon_img,
              },
            };
          }
        );
        setData(formattedPostData);
      })
      .catch(console.log);
  }, []);

  return [data];
}

import axios from 'axios';

import type { Highlight, Post, Room } from './definitions';

export const pantipApiHeader = {
  'ptauthorize': 'Basic dGVzdGVyOnRlc3Rlcg==',
  'host': 'pantip.com',
  'origin': 'https://pantip.com',
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
  // cookie:
  //   'pantip_visitc=shmg1ri756MNIk1tK; freq.5f73e63e47e7040e00000000=1',
  // connection: 'keep-alive',
  // pragma: 'no-cache',
  // priority: 'u=1, i',
  // accept: 'application/json, text/plain, */*',
  // 'cache-control': 'no-cache',
  // 'accept-encoding': 'gzip, deflate, br, zstd',
  // 'accept-language': 'en-US,en;q=0.7',
  // referer: 'https://pantip.com/',
  // 'sec-ch-ua':
  //   '"Not)A;Brand";v="99", "Brave";v="127", "Chromium";v="127"',
  // 'sec-ch-ua-mobile': '?0',
  // 'sec-ch-ua-platform': '"Windows"',
  // 'sec-fetch-dest': 'empty',
  // 'sec-fetch-mode': 'cors',
  // 'sec-fetch-site': 'same-origin',
  // 'sec-gpc': '1',
  // te: 'trailers',
};

export async function getRecommendedRooms(): Promise<Room[]> {
  try {
    const response = await axios.get('https://pantip.com/api/forum-service/home/get_room_recommend', {
      headers: pantipApiHeader,
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching recommended rooms:', error);
    throw error;
  }
}

export async function getPantipHighlights(): Promise<Highlight[]> {
  try {
    const response = await axios.get('https://pantip.com/api/forum-service/home/get_highlight', {
      headers: pantipApiHeader,
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching pantip highlights:', error);
    throw error;
  }
}

export async function getPantipRealtime(): Promise<Post[]> {
  try {
    const response = await axios.get('https://pantip.com/api/forum-service/home/get_pantip_realtime', {
      headers: pantipApiHeader,
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching pantip realtime:', error);
    throw error;
  }
}

export async function getPantipPick(): Promise<Post[]> {
  try {
    const response = await axios.get('https://pantip.com/api/forum-service/home/get_pantip_pick?limit=20', {
      headers: pantipApiHeader,
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching pantip pick:', error);
    throw error;
  }
}

export async function getPantipHitz(): Promise<Post[]> {
  try {
    const response = await axios.get('https://pantip.com/api/forum-service/home/get_pantip_now?limit=20', {
      headers: pantipApiHeader,
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching pantip hitz:', error);
    throw error;
  }
}

export async function getRecommendedTopicsByRoom(
  roomName: string,
): Promise<Post[]> {
  try {
    const response = await axios.get(`https://pantip.com/api/forum-service/forum/room_topic_recommend?room=${roomName}`, {
      headers: pantipApiHeader,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recommend topics by room:', error);
    throw error;
  }
}

export async function getTrendingTopicsByRoom(
  roomName: string,
): Promise<Post[]> {
  try {
    const response = await axios.get(`https://pantip.com/api/forum-service/forum/room_topic_trend?room=${roomName}`, {
      headers: pantipApiHeader,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trending topics by room:', error);
    throw error;
  }
}

export async function getLatestTopicsByRoom(
  roomName: string,
  limit: number,
  nextId?: number,
): Promise<{ posts: Post[]; newNextId: number }> {
  try {
    const response = await axios.get(`https://pantip.com/api/forum-service/forum/room_topic?room=${roomName}&limit=${limit}${
      nextId ? `&next_id=${nextId}` : ''
    }`, {
      headers: pantipApiHeader,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trending topics by room:', error);
    throw error;
  }
}

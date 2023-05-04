import { View, Text } from 'react-native'
import React, {createContext, useState} from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';


export const NewsContext = createContext();

export const NewsProvider = (props) => {
    const {children} = props;
    const [articles, setArticles] = useState()
    const [lastArticle, setLastArticle] = useState({})
    const getArticles = async () => {
        try {
            const response = await AxiosInstance().get('/articles');
            setArticles(response);
            setLastArticle(response.data[response.data.length-1])
            return response.data;
        } catch (error) {
            console.log('list error: ', error)
        }
        return false;
    }

    const getDetailArticle = async (idArticle) => {
        try {
            const response = await AxiosInstance().get('/articles/' + idArticle + '/detail');
            return response.data[0];
            // return response.data;
        } catch (error) {
            console.log('list error: ', error)
        }
        return false;
    }

    const getMyArticles = async () => {
        try {
            const response = await AxiosInstance().get('/articles/my-articles');
            return response.data;
        } catch (error) {
            console.log('list error: ', error)
        }
        return false;
    }

    const getLastArticle = async () => {
        try {
            const response = await AxiosInstance().get('/articles/')
            // return response.data[response.data.length-1];
            return response.data[9];
        } catch (error) {
            console.log('list error: ', error)
        }
        return false;
    }

    const deleteArticle = async (idArticle) => {
        try {
            const response = await AxiosInstance().delete('/articles/' + idArticle + '/delete')
            return true;
        } catch (error) {
            console.log('delete error: ', error)
        }
        return false;
    }

    const updateArticle = async (idArticle, article) => {
        try {
            const response = await AxiosInstance().put('/articles/' + idArticle + '/update',
            {
                title: article.title,
                content: article.content,
                image: article.image
              })
            return true;
        } catch (error) {
            console.log('delete error: ', error)
        }
        return false;
    }

    const addArticle = async (article) => {
        try {
            const response = await AxiosInstance().post('https://fpoly-hcm.herokuapp.com/api/articles',
            {
                title: article.title,
                content: article.content,
                image: article.image
              })
            return true;
        } catch (error) {
            console.log('add error: ', error)
        }
        return false;
    }

    
    const searchArticle = async(title) => {
        try {
            const response = await AxiosInstance().get('https://fpoly-hcm.herokuapp.com/api/articles/search?title=' + title);
            return response;
        } catch (error) {
            console.log('search error: ', console.error());
        }
        return {};
    }

    const uploadImage = async (formData) => {
        try {
        const response = await AxiosInstance('multipart/form-data')
            .post('/media/upload', formData);
        console.log(response);
        return response.data;
            
        } catch (error) {
            console.log('upload error: ', error)
            
        }
        return null;
    }

    return (
        <NewsContext.Provider value={{articles, setArticles, lastArticle, setLastArticle, getArticles, 
                        getLastArticle, deleteArticle, updateArticle, getDetailArticle,getMyArticles,
                        addArticle, searchArticle, uploadImage}}>
            {children}
        </NewsContext.Provider>
    )
}
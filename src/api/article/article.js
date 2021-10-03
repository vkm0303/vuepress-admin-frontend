import request from '../../utils/request';

export const getArticleList = () => {
  return request({
    url: '/article/list',
    method: 'get'
  });
}

export const getContent = (articleName) => {
  return request({
    url: `/article/${articleName}`,
    method: 'get'
  });
}

export const saveArticle = (articleName, data) => {
  return request({
    url: `/article/${articleName}`,
    method: 'patch',
    data
  });
}

export const uploadImage = (articleName, form) => {
  console.log(form.get("uploadImage"));
  return request({
    url: `/article/image/${articleName}`,
    method: 'post',
    data: form
  });
}

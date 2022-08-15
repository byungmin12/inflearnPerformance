import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import PhotoList from '../components/PhotoList';
import { fetchPhotos } from '../redux/photos';

function PhotoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const { photos, loading, category } = useSelector(state => ({
    photos: state.photos.data,
    category : state.category.category,
    loading: state.photos.loading,
  }),shallowEqual);

  const filteredPhotos = category==="all" ? photos : photos.filter(
    photo => photo.category === category
  )

  if (loading === 'error') {
    return <span>Error!</span>;
  }

  if (loading !== 'done') {
    return <span>loading...</span>;
  }

  return <PhotoList photos={filteredPhotos} />;
}

export default PhotoListContainer;

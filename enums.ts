// const beforeLoad = 'beforeLoad';
// const loading = 'loading';
// const loaded = 'loaded';

enum LoadingState {
  beforeLoad,
  loading,
  loaded,
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeLoad));
console.log(isLoading(LoadingState.loading));

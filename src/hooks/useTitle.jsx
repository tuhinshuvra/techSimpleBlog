import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-Techsimple Blog`;
    }, [title])
};

export default useTitle;
import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Careers Bangladesh`;
    }, [title])
};

export default useTitle;
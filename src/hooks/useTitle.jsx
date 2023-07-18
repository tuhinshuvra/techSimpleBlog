import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Techsimple ICT`;
    }, [title])
};

export default useTitle;
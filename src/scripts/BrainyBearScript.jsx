import { useEffect } from 'react';

const BrainyBearScript = () => {
  useEffect(() => {
    (function(b, r, a, i, n, y) {
      b.ux = b.ux || function() {
        (b.ux.q = b.ux.q || []).push(arguments);
      };
      n = r.getElementsByTagName('head')[0];
      y = r.createElement('script');
      y.async = 1;
      y.src = a + i;
      n.appendChild(y);
    })(window, document, 'https://api.brainybear.ai/cdn/js/bear', '.js?id=1093');
  }, []);
  

  return null;
};

export default BrainyBearScript;

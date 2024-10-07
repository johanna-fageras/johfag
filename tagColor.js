const applyTagColor = () => {
    const blogTags = [...document.querySelectorAll('.blog-tags'), ...document.querySelectorAll('.tagLeft')];
    blogTags.forEach((tag) => {
        const tagColor = tag.getAttribute('data-tag-color');
        tag.style.backgroundColor = tagColor ? tagColor : '';
    });
}
applyTagColor()
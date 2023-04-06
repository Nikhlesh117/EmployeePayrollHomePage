window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" src="Assets\Ellipse -2.png" alt="profile_image"></td>
        <td>Bruce Wayne</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>300000</td>
        <td>10 May 2024</td>
        <td class="action">
            <img src="Assets\delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
            <img src="Assets\create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>
                `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
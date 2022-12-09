import { teamMemberModelProps } from 'entities/team-member';
import {makeAutoObservable} from 'mobx';

export interface teamListModelProps {
	ourTeam: teamMemberModelProps[],
	advisors: teamMemberModelProps[],
}

export const teamListModel: teamListModelProps = makeAutoObservable({
	// STORE
	advisors: [
		{
			name: "Olga Gi",
			role: "Advisor, Investment Relations",
			image: "/images/team/002.png",
			linkedin: "https://www.linkedin.com/in/olga-gi-zhirova/",
		},
		{
			name: "EdK",
			role: "Advisor",
			image: "/images/team/001.png",
		},
	],

	ourTeam: [
		{
			name: "Ziyod Bekhzodov",
			role: "Co-Founder, CEO",
			image: "/images/team/006.png",
			linkedin: "https://www.linkedin.com/in/bekhzodov",
		},
		{
			name: "Javokhir Nazarov",
			role: "Co-Founder, CTO",
			image: "/images/team/005.png",
			linkedin: "https://www.linkedin.com/in/nazarov7mu/",
		},
		{
			name: "Alien Deployer",
			role: "Co-Founder, Tech Lead",
			image: "/images/team/003.png",
			github: "https://github.com/a17",
		},
		{
			name: "Fozilbek Bekhzodov",
			role: "Co-Founder, Game Producer",
			image: "/images/team/004.png",
			linkedin: "https://www.linkedin.com/in/bekhzodov7mu/",
			github: "https://github.com/bekhzodov7mu",
		},
		{
			name: "Mukhammad Botirov",
			role: "Co-Founder, 3D Team Lead",
			image: "/images/team/001.png",
			artstation: "https://www.artstation.com/maxmax17",
		},
		{
			name: "Denis Kan",
			role: "Unity Developer",
			image: "/images/team/008.png",
			linkedin: "https://www.linkedin.com/in/denis-kan-3b86b0166",
		},
		{
			name: "Fakhruz Bakhromov",
			role: "Front-end Developer",
			image: "/images/team/001.png",
			linkedin: "https://www.linkedin.com/in/kirademiurge/",
			github: "https://github.com/kirademiurge",
		},
		{
			name: "Vladislav Plufix",
			role: "Community Manager",
			image: "/images/team/003.png",
		},
		{
			name: "Diana Khay",
			role: "2D Artist",
			image: "/images/team/002.png",
		},
		{
			name: "Michael Pavlychev",
			role: "3D Artist",
			image: "/images/team/005.png",
		},
		{
			name: "Mansur Vasitov",
			role: "Unity Developer",
			image: "/images/team/004.png",
			linkedin: "https://www.linkedin.com/in/mansur-vasitov/"
		},
	]
});
